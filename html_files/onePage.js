function showImg() {
  let data = JSON.parse(localStorage.getItem("clickedObj"));
  let div = document.getElementById("image_block");
  let div6 = document.createElement("div");
  let img6 = document.createElement("img");
  img6.src = data.img6;
  div6.append(img6);

  let div1 = document.createElement("div");
  let img1 = document.createElement("img");
  img1.src = data.img1;
  div1.append(img1);

  let div2 = document.createElement("div");
  let img2 = document.createElement("img");
  img2.src = data.img2;
  div2.append(img2);
  let div3 = document.createElement("div");
  let img3 = document.createElement("img");
  img3.src = data.img3;
  div3.append(img3);

  let div4 = document.createElement("div");
  let img4 = document.createElement("img");
  img4.src = data.img4;
  div4.append(img4);

  let div5 = document.createElement("div");
  let img5 = document.createElement("img");
  img5.src = data.img5;
  div5.append(img5);

  div.append(div6, div1, div2, div3, div4, div5);
}

showImg();

function showdescrip() {
  let data = JSON.parse(localStorage.getItem("clickedObj"));
  data.qty = 1;
  let div1 = document.querySelector(".description_block");

  let divHeadingIcon = document.createElement("div");
  divHeadingIcon.setAttribute("class", "divHeadingIcon");
  let heading = document.createElement("h5");
  heading.innerHTML = `${data.brand}`;
  let i = document.createElement("i");
  i.setAttribute("class", `${data.i} icon`);
  divHeadingIcon.append(heading, i);

  let divSmallHeading = document.createElement("h4");
  divSmallHeading.innerHTML = `Blue Block Phone & Computer Glasses: ${data.frameColor}<br/>${data.frameShape} ${data.brand} LB E13736-C4`;

  let pSize = document.createElement("p");
  pSize.setAttribute("class", "pSize");
  pSize.innerHTML = `Size: ${data.size}`;

  let h3PriceTag = document.createElement("h2");
  h3PriceTag.innerHTML = `${data.priceImg}${data.price}`;

  let cart;
  let divBuyButton = document.createElement("div");
  divBuyButton.setAttribute("class", "divBuyButton");
  divBuyButton.innerHTML = "BUY NOW";
  divBuyButton.addEventListener("click", function () {
    cart = localStorage.getItem("cartObj");
    let isExist = false;
    if (cart == null) {
      cart = [];
      cart.push(data);
      isExist = true;
    } else {
      cart = JSON.parse(localStorage.getItem("cartObj"));

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].img == data.img) {
          isExist = true;
          cart[i].qty++;
          break;
        }
      }
    }
    if (!isExist) {
      cart.push(data);
    }

    localStorage.setItem("cartObj", JSON.stringify(cart));
    cart.map((el, i) => {
      buy(el, i);
    });
  });

  function buy(el, j) {
    let dummyImg = document.createElement("img");
    dummyImg.src = el.img;
    dummyImg.setAttribute("id", `${j}`);
    dummyImg.style.display = "none";

    let modalBuy = document.querySelector(".bg_modal");
    modalBuy.style.display = "flex";
    let middle_section = document.querySelector(".middle_section");
    let eachDiv = document.createElement("div");
    eachDiv.setAttribute("class", "eachDiv");
    let eachDivFirstSection = document.createElement("div");
    eachDivFirstSection.setAttribute("class", "eachDivFirstSection");
    let pName = document.createElement("p");
    pName.innerHTML = `Blue Block Phone & Computer Glasses: ${el.frameColor}${el.frameShape} ${el.brand} LB E13736-C4`;

    let productTag = document.createElement("div");
    productTag.setAttribute("class", "productTag");
    let checkOutImg = document.createElement("img");
    checkOutImg.src =
      "https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/100x100/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-blu-lb-e14069-c4-eyeglasses_g_1293.jpg";
    let pQty = document.createElement("p");
    pQty.innerHTML = "Qty";
    let boxInput = document.createElement("input");
    boxInput.type = "number";
    boxInput.value = el.qty;
    boxInput.setAttribute("id", "boxInput");
    productTag.append(checkOutImg, pQty, boxInput);

    eachDivFirstSection.append(pName, productTag);

    let eachDivSecondSection = document.createElement("div");
    eachDivSecondSection.setAttribute("class", "eachDivSecondSection");
    let pricePara = document.createElement("p");
    pricePara.textContent = "PRODUCT PRICE";
    let signSpan = document.createElement("span");
    signSpan.textContent = "₹";
    let productPricePara = document.createElement("p");
    productPricePara.innerHTML = el.price;
    eachDivSecondSection.append(pricePara, signSpan, productPricePara);

    let eachDivLastSection = document.createElement("div");
    eachDivLastSection.setAttribute("class", "eachDivLastSection");
    let equalSign = document.createElement("i");
    equalSign.setAttribute("class", "ion-refreshing");
    let crossSign = document.createElement("i");
    crossSign.setAttribute("class", `ion-close-round ${j} crossIcon2`);

    let subtotalPara = document.createElement("p");
    subtotalPara.textContent = "SUBTOTAL";
    let productPriceParaAgain = document.createElement("p");
    productPriceParaAgain.innerHTML = `${
      Number(el.price) * Number(boxInput.value)
    }`;

    let totalPrice = document.querySelector(".total_price");

    equalSign.addEventListener("click", function () {
      productPriceParaAgain.textContent = `${
        Number(el.price) * Number(boxInput.value)
      }`;
      el.qty = boxInput.value;
      localStorage.setItem("cartObj", JSON.stringify(cart));
      let totalMoney = cart.reduce((acc, el) => {
        return acc + Number(el.qty) * Number(el.price);
      }, 0);
      totalPrice.innerHTML = `Order Total: ${totalMoney}`;
    });

    let totalMoney = cart.reduce((acc, el) => {
      return acc + Number(el.qty) * Number(el.price);
    }, 0);
    totalPrice.innerHTML = `Order Total: ${totalMoney}`;

    eachDivLastSection.append(
      equalSign,
      crossSign,
      subtotalPara,
      productPriceParaAgain
    );

    eachDiv.append(
      eachDivFirstSection,
      eachDivSecondSection,
      eachDivLastSection,
      dummyImg
    );
    middle_section.append(eachDiv);
  }

  let divTryOn = document.createElement("div");
  divTryOn.setAttribute("class", "divTryOn");
  divTryOn.innerHTML = "Try On";

  let h5Technical = document.createElement("h4");
  h5Technical.innerHTML = "Technical Information";

  let h5Visit = document.createElement("h4");
  h5Visit.innerHTML = "Visit Nearby Store";

  let h5Check = document.createElement("h4");
  h5Check.innerHTML = "CHeck Delivery Options";

  let h5Review = document.createElement("h4");
  h5Review.innerHTML = "Review";

  div1.append(
    divHeadingIcon,
    divSmallHeading,
    pSize,
    h3PriceTag,
    divBuyButton,
    divTryOn,
    h5Technical,
    h5Visit,
    h5Check,
    h5Review
  );
}
showdescrip();

let iconCross = document.querySelector(".iconClose");
iconCross.addEventListener("click", function () {
  let modalBuy = document.querySelector(".bg_modal");
  modalBuy.style.display = "none";
  let middle_section = document.querySelector(".middle_section");
  middle_section.innerHTML = "";
});

let totalPrice = document.querySelector(".total_price");
let cart = JSON.parse(localStorage.getItem("cartObj"));
let totalMoney = cart.reduce((acc, el) => {
  return acc + Number(el.qty) * Number(el.price);
}, 0);
console.log(totalMoney);
totalPrice.innerHTML = `Order Total: ${totalMoney}`;

let button_checkout = document.querySelector(".button_checkout");
button_checkout.addEventListener("click", function () {
  window.location.href = "address.html";
});
