import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contactTitle">Contact Me</h1>
      <div className="contactWrapper">
        <div className="contactLeft">
          <img
            className="profilePictureContact"
            src="./images/profile_picture.jpg"
            alt="Developer: Dominic"
          />
        </div>
        <div className="contactCentre"></div>
        <div className="ContactRight">
          <p className="contactP">
            Hello! I'm thrilled that you're interested in connecting with me.
            Here's a bit about who I am and how you can reach out:
          </p>
          <p className="contactP">
            About Me: I'm Dominic, the creator of Capitalle. As a passionate
            developer and avid learner, I'm dedicated to creating engaging and
            educational experiences.
          </p>
          <p className="contactP">
            Collaboration Opportunities: Interested in collaborating on projects
            or discussing new ideas? I'd love to hear from you! Whether you're a
            fellow developer, designer, or enthusiast, your input and creativity
            are always welcome.
          </p>
          <p className="contactP">
            Get in Touch: Feel free to reach out to me on Discord or LinkedIn to
            connect, collaborate, or simply chat about all things technology and
            beyond. You can also visit my GitHub to explore more of my work and
            projects.
          </p>
          <ul className="contactList">
            <li className="contactListItems">
              <a
                href="https://discordapp.com/users/domlfrancis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li className="contactListItems">
              <a
                href="https://www.linkedin.com/in/dominic-lee-francis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="contactListItems">
              <a
                href="https://github.com/Dominic-Lee-Francis"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
          <p className="contactP">
            I look forward to hearing from you and exploring opportunities to
            work together!
          </p>
          <p className="contactP">Best regards,</p>
          <p className="contactP">Dom</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
