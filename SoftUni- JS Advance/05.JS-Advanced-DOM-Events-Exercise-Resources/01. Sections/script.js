function create(words) {
   const contetRef = document.getElementById("content");

   for (let word of words){
      let divRef = document.createElement("div");
      let pageRef = document.createElement("p");
      pageRef.style.display = "none";
      pageRef.textContent = word;

      divRef.addEventListener("click", showText);

      divRef.appendChild(pageRef);
      contetRef.appendChild(divRef);
   }

   function showText(e){
      currentTarget = e.currentTarget.children[0].style.display = "block";
   }
}