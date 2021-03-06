import invariant from 'invariant'
import firebase from '../firebase'
import {netlifyApi as http} from './http'

const getNetlifySubdomainFromFirebase = async () => {
	const database = firebase.database()
	const snapshot = await database.ref('netlify-subdomain').once('value')
	const subdomain = snapshot.val()
	if(typeof subdomain !== 'string'){
		throw new Error('firebase: missing netlify-subdomain')
	}
	return subdomain
}

const getNetlifySiteData = async ({token}) => {
	invariant(token, 'getNetlifySiteData: missing token')
	const subdomain = await getNetlifySubdomainFromFirebase()
	const {site_id: siteId, identity_instance_id: identityId} = await http.get(
		`/sites/${subdomain}.netlify.com`, {auth: {token}},
	)
	if(!siteId || !identityId) throw new Error('netlify: invalid response')
	return {siteId, identityId, subdomain}
}

export default getNetlifySiteData
