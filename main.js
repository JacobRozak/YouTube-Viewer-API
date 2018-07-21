/OauthId got from https://console.cloud.google.com/apis/credentials?project=fabled-emissary-210617
const CLIENT_ID = '	277753406219-f9rnq1lukvee0sqt6q4cv5ffag0j1uf2.apps.googleusercontent.com 	 	 '
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

var SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content')
const channelForm = document.getElementById('channel-form')
const channelInput = document.getElementById('channel-input')
const videoContainer= document.getElementById('video-container')

const defaultChannel = 'Kuba Rożak'

//load auth2 liblary
