import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <form className="forminfo">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your Name"
          required
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your E-mail"
          required
        ></input>
        <label htmlFor="txt_area">Message</label>
        <textarea
          name="Message"
          id="txt_area"
          placeholder="Enter your Message"
          rows="6"
        ></textarea>
        <button className="btn1">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
