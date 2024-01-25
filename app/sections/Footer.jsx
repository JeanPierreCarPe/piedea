import { logo } from "@/public/assets/images";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative overflow-hidden flex min-w-full h-auto justify-center items-center bg-white px-16 py-16 gap-8 z-[2] shadow-container">
      <div className="w-full flex justify-between items-start">
        <Image src={logo} alt="" height={125} />
        <ul className="flex flex-col gap-5">
          <p className="font-opensans font-semibold capitalize text-base text-brown tracking-wider">
            quick links
          </p>
          <li className="font-opensans capitalize text-base text-brown tracking-wider">
            <a>home</a>
          </li>
          <li className="font-opensans capitalize text-base text-brown tracking-wider">
            <a>about us</a>
          </li>
          <li className="font-opensans capitalize text-base text-brown tracking-wider">
            <a>recipes</a>
          </li>
          <li className="font-opensans capitalize text-base text-brown tracking-wider">
            <a>join community</a>
          </li>
          <li className="font-opensans capitalize text-base text-brown tracking-wider">
            <a>blog</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          <p className="font-opensans font-semibold capitalize text-base text-brown tracking-wider">
            support
          </p>
          <li className="font-opensans text-base text-brown tracking-wider">
            <a>FAQs</a>
          </li>
          <li className="font-opensans capitalize text-base text-brown tracking-wider">
            <a>terms of service</a>
          </li>
          <li className="font-opensans capitalize text-base text-brown tracking-wider">
            <a>privacy policy</a>
          </li>
        </ul>
        <div className="flex flex-col gap-5">
          <p className="font-opensans font-semibold capitalize text-base text-brown tracking-wider">
            Social Media
          </p>
          <div className="flex gap-6">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M20.096 5.90309C20.0849 5.06334 19.9276 4.23193 19.6315 3.44606C19.3746 2.78318 18.9823 2.18117 18.4796 1.67849C17.977 1.17581 17.3749 0.783514 16.7121 0.526666C15.9363 0.235455 15.1167 0.0779923 14.2883 0.0609825C13.2217 0.0133053 12.8835 0 10.1759 0C7.46825 0 7.1212 7.43489e-08 6.06233 0.0609825C5.23425 0.0781174 4.41508 0.235578 3.63966 0.526666C2.97668 0.783335 2.37458 1.17557 1.87188 1.67827C1.36917 2.18097 0.976938 2.78308 0.720269 3.44606C0.428475 4.22124 0.271354 5.04059 0.255695 5.86872C0.208018 6.93647 0.193604 7.27464 0.193604 9.98226C0.193604 12.6899 0.193604 13.0358 0.255695 14.0958C0.272326 14.9252 0.428663 15.7434 0.720269 16.5207C0.977369 17.1835 1.36989 17.7853 1.87277 18.2878C2.37564 18.7903 2.9778 19.1824 3.64077 19.439C4.41406 19.7419 5.23338 19.9106 6.06344 19.9379C7.13118 19.9856 7.46936 20 10.177 20C12.8846 20 13.2316 20 14.2905 19.9379C15.1189 19.9216 15.9385 19.7645 16.7143 19.4733C17.377 19.2162 17.9788 18.8238 18.4815 18.3211C18.9841 17.8185 19.3765 17.2166 19.6337 16.5539C19.9253 15.7778 20.0816 14.9595 20.0983 14.1291C20.1459 13.0624 20.1603 12.7242 20.1603 10.0155C20.1581 7.30791 20.1581 6.96419 20.096 5.90309ZM10.1692 15.1026C7.33741 15.1026 5.04337 12.8085 5.04337 9.97672C5.04337 7.14492 7.33741 4.85087 10.1692 4.85087C11.5287 4.85087 12.8324 5.39091 13.7937 6.3522C14.755 7.31348 15.2951 8.61726 15.2951 9.97672C15.2951 11.3362 14.755 12.64 13.7937 13.6012C12.8324 14.5625 11.5287 15.1026 10.1692 15.1026ZM15.4991 5.85653C15.3421 5.85667 15.1866 5.82586 15.0415 5.76584C14.8964 5.70582 14.7646 5.61779 14.6536 5.50677C14.5426 5.39575 14.4545 5.26393 14.3945 5.11885C14.3345 4.97377 14.3037 4.81828 14.3038 4.66127C14.3038 4.50438 14.3347 4.34903 14.3948 4.20408C14.4548 4.05913 14.5428 3.92743 14.6537 3.81649C14.7647 3.70555 14.8964 3.61755 15.0413 3.55751C15.1863 3.49747 15.3416 3.46657 15.4985 3.46657C15.6554 3.46657 15.8108 3.49747 15.9557 3.55751C16.1007 3.61755 16.2324 3.70555 16.3433 3.81649C16.4542 3.92743 16.5422 4.05913 16.6023 4.20408C16.6623 4.34903 16.6932 4.50438 16.6932 4.66127C16.6932 5.3221 16.1588 5.85653 15.4991 5.85653Z"
                fill="#5C3614"
              />
              <path
                d="M10.1692 13.3058C12.0081 13.3058 13.4989 11.815 13.4989 9.97612C13.4989 8.13721 12.0081 6.64648 10.1692 6.64648C8.33033 6.64648 6.8396 8.13721 6.8396 9.97612C6.8396 11.815 8.33033 13.3058 10.1692 13.3058Z"
                fill="#5C3614"
              />
            </svg>
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none">
              <path
                d="M6.90035 20V10.8919H9.97305L10.4298 7.32578H6.90035V5.05432C6.90035 4.02527 7.18706 3.32071 8.66396 3.32071H10.5354V0.141321C9.62482 0.0437405 8.70957 -0.0033761 7.79382 0.000187992C5.07784 0.000187992 3.2131 1.65823 3.2131 4.70204V7.31912H0.1604V10.8852H3.21977V20H6.90035Z"
                fill="#5C3614"
              />
            </svg>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M2.94319 4.81681C4.27305 4.81681 5.35111 3.73875 5.35111 2.40889C5.35111 1.07904 4.27305 0.000976562 2.94319 0.000976562C1.61334 0.000976562 0.535278 1.07904 0.535278 2.40889C0.535278 3.73875 1.61334 4.81681 2.94319 4.81681Z"
                fill="#5C3614"
              />
              <path
                d="M7.62481 6.63972V19.9988H11.7726V13.3925C11.7726 11.6492 12.1006 9.96106 14.262 9.96106C16.3937 9.96106 16.4201 11.9541 16.4201 13.5025V19.9999H20.5701V12.6738C20.5701 9.07515 19.7953 6.30957 15.5892 6.30957C13.5698 6.30957 12.2161 7.41778 11.6626 8.46657H11.6065V6.63972H7.62481ZM0.865479 6.63972H5.0199V19.9988H0.865479V6.63972Z"
                fill="#5C3614"
              />
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.1329 8.46857L19.3658 0H17.6515L11.3729 7.35286L6.35578 0H0.570068L8.15578 11.12L0.570068 20H2.28435L8.91578 12.2343L14.2144 20H20.0001L12.1329 8.46857ZM9.78578 11.2171L9.01721 10.11L2.9015 1.3H5.53435L10.4686 8.41L11.2372 9.51714L17.6529 18.76H15.0201L9.78578 11.2171Z"
                fill="#5C3614"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
