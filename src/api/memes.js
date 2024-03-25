export async function getAllMemes(){
    const promise=await fetch(`https://api.imgflip.com/get_memes`);
    return promise.json();
}