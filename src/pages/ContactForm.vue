<template>
  <div class="form-container">
    <div class="contact-box">
      <div class="left"></div>
      <div class="right">
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          class="field"
          placeholder="Your Name"
          autocomplete="off"
        />
        <input
          type="email"
          name="email"
          class="field"
          placeholder="Your Phone"
          autocomplete="off"
        />
        <input
          type="text"
          name="phone"
          class="field"
          placeholder="Your Email"
          autocomplete="off"
        />
        <textarea
          name="message"
          class="field area"
          placeholder="Message"
        ></textarea>
        <button id="send-btn">Send</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form-container {
  margin-top: 102px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
  color: #264653;
}
.form-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("../assets/Travel-unsplash.jpg") no-repeat center;
  background-size: cover;
  filter: blur(50px);
  z-index: -1;
}

.contact-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}
.left {
  background: url(../assets/Travel-unsplash.jpg) no-repeat center;
  background-size: cover;
  height: 100%;
}
.right {
  padding: 25px 40px;
}
.contact-box h2 {
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
}
.contact-box h2::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: #e76f51;
}
.field {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
  /* color: #e76f51; */
  border-radius: 5px;
}
.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.field:focus {
  background-color: #fff;
  border: 2px solid rgba(30, 85, 250, 0.47);
}
.area {
  min-height: 150px;
}
.form-container #send-btn {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  background-color: #e76f51;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  transition: 0.3s;
  border-radius: 5px;
}
.form-container #send-btn:hover {
  background-color: #d16449;
}
@media screen and (max-width: 560px) {
  .contact-box {
    grid-template-columns: 1fr;
  }
  .left {
    height: 200px;
  }
  .form-container {
    padding: 20px;
  }
}
@media screen and (max-width: 768px) {
  .contact-box {
    grid-template-columns: 1fr;
  }
  .left {
    height: 200px;
  }
}
</style>
