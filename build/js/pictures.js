"use strict";var commentsVariants=["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"],descriptions=["Тестим новую камеру!","Затусили с друзьями на море","Как же круто тут кормят","Отдыхаем...","Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......","Вот это тачка!"],userPhotos=[];function postsArrayGeneration(e){for(var t=0;t<e;t++)userPhotos[t]={},userPhotos[t].url=createPhotoUrl(t),userPhotos[t].likes=getRandomIndex(15,200),userPhotos[t].comment=сommentsGeneration(getRandomIndex(1,11)),userPhotos[t].description=arrayRandomElement(descriptions)}postsArrayGeneration(25);for(var picturesElement=document.querySelector(".pictures"),pictureTemplate=document.querySelector("#picture-template").content,i=0;i<userPhotos.length;i++){var photoElement=pictureTemplate.cloneNode(!0);photoElement.querySelector(".picture__img").src=userPhotos[i].url;var photoLikes=photoElement.querySelector(".picture__stat--likes");photoLikes.textContent=userPhotos[i].likes;var photoComments=photoElement.querySelector(".picture__stat--comments");photoComments.textContent=userPhotos[i].comment.length,picturesElement.appendChild(photoElement);var onSmallPhotoCLick=function(t){return function(e){e.preventDefault(),openBigPhoto(t),document.addEventListener("keydown",onBigPhotoEscKeydown)}},pictureElement=document.querySelectorAll(".picture__link");pictureElement[i].addEventListener("click",onSmallPhotoCLick(i),!1)}function getRandomIndex(e,t){return Math.floor(Math.random()*(t-e)+e)}function arrayRandomElement(e){return e[Math.floor(Math.random()*e.length)]}function createPhotoUrl(e){return"photos/"+(e+1)+".jpg"}function getRandomComment(){return Math.floor(2*Math.random())?commentsVariants[getRandomIndex(0,commentsVariants.length)]+" "+commentsVariants[getRandomIndex(0,commentsVariants.length)]:commentsVariants[getRandomIndex(0,commentsVariants.length)]}function сommentsGeneration(e){var t=[];t.splice(0,t.length);for(var o=0;o<e;o++)t[o]=getRandomComment();return t}var commentsElement=document.querySelector(".social__comments"),commentTemplate=document.querySelector("#comment-template").content,postElement=document.querySelector(".big-picture");function openBigPhoto(e){postElement.classList.remove("hidden"),postElement.querySelector(".big-picture__img img").src=userPhotos[e].url,postElement.querySelector(".likes-count").textContent=userPhotos[e].likes,postElement.querySelector(".comments-count").textContent=userPhotos[e].comment.length,postElement.querySelector(".social__caption").textContent=userPhotos[e].description,postCommentsCreation(e)}function postCommentsCreation(e){for(var t=0;t<userPhotos[e].comment.length;t++){var o=commentTemplate.cloneNode(!0);o.querySelector(".social__picture").src="img/avatar-"+getRandomIndex(1,6)+".svg",o.querySelector(".social__text").textContent=userPhotos[e].comment[t],commentsElement.append(o)}}document.querySelector(".social__comment-count").classList.add("visually-hidden"),document.querySelector(".social__loadmore").classList.add("visually-hidden");var bigPhotoCloseButton=postElement.querySelector(".big-picture__cancel"),onBigPhotoCloseClick=function(){closeBigPhotoScreen()};function deleteComments(){for(var e=commentsElement.children.length;0<e;e--)commentsElement.children[0].remove()}function closeBigPhotoScreen(){postElement.classList.add("hidden"),console.log("removed"),deleteComments(),document.removeEventListener("keydown",onBigPhotoEscKeydown,!1)}bigPhotoCloseButton.addEventListener("click",onBigPhotoCloseClick,!1);var onBigPhotoEscKeydown=function(e){27===e.keyCode&&closeBigPhotoScreen()};