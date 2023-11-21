import Input from "../Shared/input";
import StyledAdsPage from "@/styles/StyledAdsPage";
const AdsPage = () => {
  return (
    <StyledAdsPage>
      <section>
        <p>
          Thank you for choosing Newscast as a platform to showcase your amazing
          product! We`re thrilled to partner with you in promoting your business
          to our engaged audience. To ensure we create a compelling and accurate
          representation of your product, please take a few moments to fill out
          the following form.
        </p>
        <h3>Why advertise with us?</h3>
        <ul>
          <li>Reach a diverse and active online community.</li>
          <li>Gain visibility among our dedicated audience.</li>
          <li>
            Showcase your product to potential customers who are actively
            seeking innovative solutions.
          </li>
        </ul>
        <form>
          <h1>Product Details</h1>
          <div className="flex-row mobile">
            <Input
              style="half-width"
              label="Name"
              type="text"
              placeholder="Your Name"
              required
            />
            <Input
              style="half-width"
              label="Email"
              type="email"
              placeholder="Your Email"
              required
            />
            <Input
              style="half-width"
              label="Phone Number"
              type="number"
              placeholder="+234......"
              required
            />
          </div>
          <div className="flex-row mobile">
            <Input
              style="half-width"
              label="Product Name"
              type="text"
              placeholder="Product Name"
              required
            />
            <Input
              style="half-width"
              label="Product Link"
              type="text"
              placeholder="Provide a link to your product"
              required
            />
            <Input
              style="half-width special"
              label="Logo/Product-Image"
              type="file"
              required
            />
          </div>
          <div className="flex-row mobile">
            <Input
              style="half-width"
              label="Twitter handle"
              type="text"
              placeholder="https://x.com/name"
              required={false}
            />
            <Input
              style="half-width"
              label="Instagram handle"
              type="text"
              placeholder="https://instagram.com/name"
              required={false}
            />
            <Input
              style="half-width"
              label="Facebook handle"
              type="text"
              placeholder="https://facebook.com/name"
              required={false}
            />
          </div>
          <div className="duration">
            <Input
              style="half-width"
              label="Duration"
              type="text"
              placeholder="Days/Weeks/Months"
              required
            />
          </div>
          <div className="single">
            <label>Product Details</label>
            <textarea className="full-width"></textarea>
          </div>
          <button>Submit</button>
        </form>
      </section>
    </StyledAdsPage>
  );
};
export default AdsPage;
