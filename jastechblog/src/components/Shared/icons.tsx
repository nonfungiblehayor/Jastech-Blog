export default function Icons({
  type,
  className,
}: {
  type: string;
  className?: string;
}): JSX.Element | null {
  switch (type) {
    case "haze":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_3_37)">
            <path
              d="M4.05535 8.66675C3.95898 8.0934 3.98876 7.50593 4.1426 6.94526C4.29645 6.38459 4.57067 5.8642 4.94616 5.42032C5.32165 4.97645 5.78939 4.61977 6.31681 4.37511C6.84422 4.13046 7.41863 4.00372 8.00002 4.00372C8.58141 4.00372 9.15582 4.13046 9.68323 4.37511C10.2106 4.61977 10.6784 4.97645 11.0539 5.42032C11.4294 5.8642 11.7036 6.38459 11.8574 6.94526C12.0113 7.50593 12.0411 8.0934 11.9447 8.66675H4.05535ZM1.33335 10.0001H8.00002V11.3334H1.33335V10.0001ZM9.33335 10.0001H14.6667V11.3334H9.33335V10.0001ZM10.6667 12.6667H13.3334V14.0001H10.6667V12.6667ZM2.66669 12.6667H9.33335V14.0001H2.66669V12.6667ZM7.33335 0.666748H8.66669V2.66675H7.33335V0.666748ZM2.34335 3.28608L3.28602 2.34341L4.70002 3.75741L3.75735 4.70008L2.34335 3.28675V3.28608ZM12.7134 2.34341L13.656 3.28608L12.242 4.70008L11.2994 3.75741L12.7134 2.34341ZM15.3334 7.33341V8.66675H13.3334V7.33341H15.3334ZM2.66669 7.33341V8.66675H0.666687V7.33341H2.66669Z"
              fill="#393939"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_37">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "facebook":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3_6)">
            <circle cx="13" cy="12" r="12" fill="#1B7BFD" />
          </g>
          <g clip-path="url(#clip0_3_6)">
            <path
              d="M14.3333 12.9999H16L16.6667 10.3333H14.3333V8.99992C14.3333 8.31325 14.3333 7.66659 15.6667 7.66659H16.6667V5.42659C16.4493 5.39792 15.6287 5.33325 14.762 5.33325C12.952 5.33325 11.6667 6.43792 11.6667 8.46659V10.3333H9.66666V12.9999H11.6667V18.6666H14.3333V12.9999Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3_6"
              x="0"
              y="0"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_6"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_6"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_3_6">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(5 4)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "twitter":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3_11)">
            <circle cx="13" cy="12" r="12" fill="#42C0F5" />
          </g>
          <g clip-path="url(#clip0_3_11)">
            <path
              d="M19.7747 7.77062C19.2657 7.99575 18.726 8.1436 18.1733 8.20928C18.7558 7.86091 19.1918 7.31263 19.4 6.66662C18.8533 6.99195 18.254 7.21995 17.6293 7.34328C17.2097 6.89434 16.6536 6.59659 16.0473 6.49634C15.441 6.39609 14.8186 6.49895 14.2768 6.78892C13.7351 7.07889 13.3043 7.53974 13.0514 8.09981C12.7986 8.65989 12.7378 9.2878 12.8787 9.88595C11.7701 9.83039 10.6856 9.5423 9.69553 9.04039C8.7055 8.53849 7.83209 7.83398 7.132 6.97262C6.8842 7.39825 6.75397 7.8821 6.75467 8.37462C6.75467 9.34128 7.24667 10.1953 7.99467 10.6953C7.55201 10.6813 7.11909 10.5618 6.732 10.3466V10.3813C6.73214 11.0251 6.95492 11.649 7.36257 12.1473C7.77022 12.6456 8.33766 12.9876 8.96867 13.1153C8.55775 13.2266 8.12688 13.2431 7.70867 13.1633C7.88658 13.7174 8.23334 14.2021 8.7004 14.5494C9.16746 14.8966 9.73142 15.0891 10.3133 15.1C9.73499 15.5542 9.07279 15.8899 8.36459 16.0881C7.65639 16.2862 6.91609 16.3428 6.186 16.2546C7.46047 17.0742 8.94407 17.5094 10.4593 17.5079C15.588 17.5079 18.3927 13.2593 18.3927 9.57462C18.3927 9.45462 18.3893 9.33328 18.384 9.21462C18.9299 8.82006 19.4011 8.3313 19.7753 7.77128L19.7747 7.77062Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3_11"
              x="0"
              y="0"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_11"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_11"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_3_11">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(5 4)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3_16)">
            <circle cx="13" cy="12" r="12" fill="#C23785" />
          </g>
          <g clip-path="url(#clip0_3_16)">
            <path
              d="M13 5.33325C14.8113 5.33325 15.0373 5.33992 15.748 5.37325C16.458 5.40659 16.9413 5.51792 17.3666 5.68325C17.8066 5.85259 18.1773 6.08192 18.548 6.45192C18.887 6.78518 19.1493 7.18831 19.3166 7.63325C19.4813 8.05792 19.5933 8.54192 19.6266 9.25192C19.658 9.96259 19.6666 10.1886 19.6666 11.9999C19.6666 13.8113 19.66 14.0373 19.6266 14.7479C19.5933 15.4579 19.4813 15.9413 19.3166 16.3666C19.1498 16.8118 18.8874 17.215 18.548 17.5479C18.2146 17.8868 17.8115 18.1491 17.3666 18.3166C16.942 18.4813 16.458 18.5933 15.748 18.6266C15.0373 18.6579 14.8113 18.6666 13 18.6666C11.1886 18.6666 10.9626 18.6599 10.252 18.6266C9.54198 18.5933 9.05865 18.4813 8.63331 18.3166C8.1882 18.1496 7.785 17.8872 7.45198 17.5479C7.11292 17.2147 6.8506 16.8116 6.68331 16.3666C6.51798 15.9419 6.40665 15.4579 6.37331 14.7479C6.34198 14.0373 6.33331 13.8113 6.33331 11.9999C6.33331 10.1886 6.33998 9.96259 6.37331 9.25192C6.40665 8.54125 6.51798 8.05859 6.68331 7.63325C6.85014 7.18804 7.11252 6.7848 7.45198 6.45192C7.78509 6.11274 8.18827 5.8504 8.63331 5.68325C9.05865 5.51792 9.54131 5.40659 10.252 5.37325C10.9626 5.34192 11.1886 5.33325 13 5.33325ZM13 8.66659C12.1159 8.66659 11.2681 9.01777 10.643 9.6429C10.0178 10.268 9.66665 11.1159 9.66665 11.9999C9.66665 12.884 10.0178 13.7318 10.643 14.3569C11.2681 14.9821 12.1159 15.3333 13 15.3333C13.884 15.3333 14.7319 14.9821 15.357 14.3569C15.9821 13.7318 16.3333 12.884 16.3333 11.9999C16.3333 11.1159 15.9821 10.268 15.357 9.6429C14.7319 9.01777 13.884 8.66659 13 8.66659ZM17.3333 8.49992C17.3333 8.2789 17.2455 8.06694 17.0892 7.91066C16.933 7.75438 16.721 7.66659 16.5 7.66659C16.279 7.66659 16.067 7.75438 15.9107 7.91066C15.7544 8.06694 15.6666 8.2789 15.6666 8.49992C15.6666 8.72093 15.7544 8.93289 15.9107 9.08917C16.067 9.24545 16.279 9.33325 16.5 9.33325C16.721 9.33325 16.933 9.24545 17.0892 9.08917C17.2455 8.93289 17.3333 8.72093 17.3333 8.49992ZM13 9.99992C13.5304 9.99992 14.0391 10.2106 14.4142 10.5857C14.7893 10.9608 15 11.4695 15 11.9999C15 12.5304 14.7893 13.0391 14.4142 13.4141C14.0391 13.7892 13.5304 13.9999 13 13.9999C12.4695 13.9999 11.9608 13.7892 11.5858 13.4141C11.2107 13.0391 11 12.5304 11 11.9999C11 11.4695 11.2107 10.9608 11.5858 10.5857C11.9608 10.2106 12.4695 9.99992 13 9.99992Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3_16"
              x="0"
              y="0"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_16"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_16"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_3_16">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(5 4)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "youtube":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3_21)">
            <circle cx="13" cy="12" r="12" fill="#EF5043" />
          </g>
          <g clip-path="url(#clip0_3_21)">
            <path
              d="M19.362 8.33208C19.6666 9.52008 19.6666 12.0001 19.6666 12.0001C19.6666 12.0001 19.6666 14.4801 19.362 15.6681C19.1926 16.3247 18.6973 16.8414 18.07 17.0161C16.9306 17.3334 13 17.3334 13 17.3334C13 17.3334 9.07131 17.3334 7.92998 17.0161C7.29998 16.8387 6.80531 16.3227 6.63798 15.6681C6.33331 14.4801 6.33331 12.0001 6.33331 12.0001C6.33331 12.0001 6.33331 9.52008 6.63798 8.33208C6.80731 7.67541 7.30265 7.15875 7.92998 6.98408C9.07131 6.66675 13 6.66675 13 6.66675C13 6.66675 16.9306 6.66675 18.07 6.98408C18.7 7.16141 19.1946 7.67741 19.362 8.33208ZM11.6666 14.3334L15.6666 12.0001L11.6666 9.66675V14.3334Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3_21"
              x="0"
              y="0"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_21"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_21"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_3_21">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(5 4)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "clock":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_3_32)">
            <path
              d="M8.00001 14.6666C4.31801 14.6666 1.33334 11.6819 1.33334 7.99992C1.33334 4.31792 4.31801 1.33325 8.00001 1.33325C11.682 1.33325 14.6667 4.31792 14.6667 7.99992C14.6667 11.6819 11.682 14.6666 8.00001 14.6666ZM8.00001 13.3333C9.4145 13.3333 10.7711 12.7713 11.7712 11.7712C12.7714 10.771 13.3333 9.41441 13.3333 7.99992C13.3333 6.58543 12.7714 5.22888 11.7712 4.22868C10.7711 3.22849 9.4145 2.66659 8.00001 2.66659C6.58552 2.66659 5.22897 3.22849 4.22877 4.22868C3.22858 5.22888 2.66668 6.58543 2.66668 7.99992C2.66668 9.41441 3.22858 10.771 4.22877 11.7712C5.22897 12.7713 6.58552 13.3333 8.00001 13.3333ZM8.66668 7.99992H11.3333V9.33325H7.33334V4.66659H8.66668V7.99992Z"
              fill="#393939"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_32">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return null;
  }
}
