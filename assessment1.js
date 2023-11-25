const arr=[];
function mintNFT(name, eyecolor, shirttype,bling){
   const ob={
      "name":name,
      "eyecolor":eyecolor,
      "shirttype":shirttype,
      "bling":bling
   };
   arr.push(ob);
   console.log("Minted: "+name);
}
function listNFTs(){
   for(let i=0;i<arr.length;i++){
         console.log("\nID: \t\t" + (i+1));
         console.log("Name: \t\t" + arr[i].name);
         console.log("Eyecolor: \t" + arr[i].eyecolor);
         console.log("Tshirt: \t" + arr[i].shirttype);
         console.log("Bling: \t\t" + arr[i].bling);
   }
}
function getTotalSupply(){
   console.log("\n"+arr.length);


}
mintNFT("NEWBIE","GREEN","JACKET","BRACELET");
mintNFT("bob","brown","shirt","chain");
mintNFT("NEW","balck","Tshirt","silver ring");
mintNFT("BIE","grey","hoodie","gold bracelet");
mintNFT("jack","blue","sweater","gold ring");
listNFTs();
getTotalSupply();
