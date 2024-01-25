import Tag from "./Tag";

const BlogCard = (props) => {
  const {
    type,
    postImage,
    userImage,
    username,
    date,
    postName,
    tags,
    description,
    likes,
    styles,
  } = props;

  if (type === "profile") {
    return (
      <div
        className={`w-full h-auto flex items-center gap-5 pr-2 bg-white rounded-xl overflow-hidden shadow-card hover:scale-105 transition-all ${styles}`}
      >
        <div className="w-[92px] h-[92px] bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center"></div>
        <h6 className="font-ebgaramond font-semibold text-lg text-brown flex-1">
          {postName}
        </h6>
      </div>
    );
  } else {
    return (
      <div
        className={`w-[1000px] h-auto flex gap-7 pr-5 bg-white rounded-3xl overflow-hidden shadow-card ${styles}`}
      >
        <div className="w-[350px] h-[350px] bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center"></div>
        <div className="flex flex-col flex-1 justify-between py-5">
          <div className="w-full h-fit flex flex-col gap-5">
            <div className="w-full h-fit flex items-center gap-4">
              <div className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center rounded-full"></div>
              <h6 className="font-ebgaramond font-semibold text-xl text-brown flex-1">
                {username}
              </h6>
              <p className="min-w-[110px] font-opensans font-semibold text-sm text-brown tracking-wider">
                {date}
              </p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h3 className="font-ebgaramond font-semibold text-4xl text-brown tracking-wide">
                {postName}
              </h3>
              <div className="w-full flex gap-4">
                {tags.map((item) => (
                  <Tag key={item} tagname={item} />
                ))}
              </div>
            </div>
            <p className="font-opensans font-normal text-base text-brown tracking-wider leading-8">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none">
              <path
                d="M10.4731 2.06093C9.38353 1.05903 7.95733 0.502976 6.47713 0.50293C5.69366 0.503745 4.9181 0.659489 4.19506 0.961198C3.47203 1.26291 2.81579 1.70462 2.26413 2.26093C-0.0888748 4.62393 -0.0878749 8.31993 2.26613 10.6729L9.59813 18.0049C9.76813 18.3039 10.0961 18.4969 10.4731 18.4969C10.6279 18.4954 10.7802 18.4576 10.9178 18.3866C11.0553 18.3156 11.1743 18.2133 11.2651 18.0879L18.6801 10.6729C21.0341 8.31893 21.0341 4.62393 18.6781 2.25693C18.1267 1.70165 17.471 1.26083 16.7487 0.959813C16.0264 0.658799 15.2517 0.503529 14.4691 0.50293C12.989 0.503172 11.5628 1.0592 10.4731 2.06093ZM17.2641 3.67093C18.8271 5.24193 18.8281 7.69593 17.2661 9.25893L10.4731 16.0519L3.68012 9.25893C2.11812 7.69593 2.11913 5.24193 3.67813 3.67493C4.43813 2.91893 5.43213 2.50293 6.47713 2.50293C7.52213 2.50293 8.51213 2.91893 9.26613 3.67293L9.76613 4.17293C9.85891 4.26588 9.96912 4.33961 10.0904 4.38992C10.2117 4.44023 10.3418 4.46613 10.4731 4.46613C10.6045 4.46613 10.7345 4.44023 10.8558 4.38992C10.9771 4.33961 11.0873 4.26588 11.1801 4.17293L11.6801 3.67293C13.1921 2.16393 15.7541 2.16793 17.2641 3.67093Z"
                fill="#F7857A"
              />
            </svg>
            <p className="font-opensans font-semibold text-base text-pink tracking-wider">
              {likes}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default BlogCard;
