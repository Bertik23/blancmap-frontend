
const backendURL = "http://localhost:5000";
function logIntoConsole(toLog: string){
        console.log(toLog);
    }
function alertToBrowser(toAlert: string){
    alert(toAlert);
}

async function searchObject(query: string): Promise<any>{
        const response = await fetch(`${backendURL}/api/searchObject?query=${query}`)
        const rJson = await response.json()
        return rJson.data
    }
function getData(query: string){
    console.log(searchObject(query))//.then(new any data => {return data})
}

export default { logIntoConsole, alertToBrowser, searchObject, getData }

// declare module '@vue/runtime-core' {
//     export interface ComponentCustomProperties {
//       alertToBrowser: (toLog: string) => null,
//       $backendAPI: typeof this,
//     }
//   }