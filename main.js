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
function handleClientLoad(){
    gapi.load('client:auth2',initClient)
}
//Init API client liblary and set up sign in listeners 

function initClient(){
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId:CLIENT_ID,
        scope: SCOPES
    }).then(()=>{

        //lissten fo sign in state changes
        gapi.auth2.getAuthInstance().isSingnedIn.listen(updateSinginStatus)
        //handle initial sign in status
        updateSinginStatus(gapi.auth2.getAuthInstance().isSigned.get())
        authorizeButton.onclick = handleAuthClick
        singoutButton.onclick = handleSignoutClick
    })
}
function updateSinginStatus(isSigned){
    if(isSingnedIn){
        authorizeButton.style.display = 'none'
        signoutButton.style.display = 'block'
        content.style.display = 'block'
        videoContainer.style.display ='block'
        getChannel(defaChannel)

    }else{
        authorizeButton.style.display = 'block'
        signoutButton.style.display = 'none'
        content.style.display = 'none'
        videoContainer.style.display ='none'
    }
}