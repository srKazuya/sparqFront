
import React from 'react';


import './buttonsGroup.css'



const ButtonsGroup: React.FC = () => {
  return (
    <div className='buttonsGroup-container'>
      <button>
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
          <path d="M31.5412 21.125C31.1837 21.125 30.81 21.0112 30.4525 20.93C29.7291 20.7682 29.0178 20.5565 28.3237 20.2962C27.5699 20.022 26.7412 20.0362 25.9972 20.3362C25.2532 20.6362 24.6465 21.2008 24.2937 21.9212L23.9362 22.6687C22.3581 21.7737 20.9001 20.6816 19.5975 19.4187C18.3346 18.1161 17.2425 16.6582 16.3475 15.08L17.095 14.7387C17.8154 14.386 18.38 13.7792 18.68 13.0352C18.98 12.2913 18.9942 11.4626 18.72 10.7087C18.4619 10.0084 18.2502 9.29188 18.0862 8.56375C18.005 8.20625 17.94 7.8325 17.8912 7.475C17.6939 6.33038 17.0944 5.29383 16.2006 4.55201C15.3069 3.8102 14.1776 3.41186 13.0162 3.42875H8.12497C7.438 3.42785 6.75859 3.57215 6.13129 3.8522C5.50399 4.13224 4.94296 4.54171 4.48497 5.05375C4.01749 5.57969 3.66941 6.20059 3.46464 6.87381C3.25987 7.54702 3.20327 8.25659 3.29872 8.95375C4.18205 15.7172 7.27219 22.0003 12.09 26.8287C16.9184 31.6465 23.2015 34.7367 29.965 35.62C30.1759 35.6361 30.3878 35.6361 30.5987 35.62C31.797 35.6218 32.954 35.1821 33.8487 34.385C34.3608 33.927 34.7702 33.366 35.0503 32.7387C35.3303 32.1114 35.4746 31.432 35.4737 30.745V25.87C35.465 24.7472 35.0689 23.6618 34.3524 22.7973C33.6359 21.9327 32.6429 21.342 31.5412 21.125ZM32.3375 30.875C32.3369 31.1018 32.289 31.3259 32.1966 31.533C32.1042 31.7401 31.9696 31.9256 31.8012 32.0775C31.6231 32.2398 31.4112 32.3604 31.1807 32.4306C30.9503 32.5009 30.7071 32.519 30.4687 32.4837C24.4047 31.6918 18.7691 28.9282 14.43 24.6187C10.0871 20.2759 7.29952 14.6207 6.49997 8.53125C6.46467 8.29292 6.48281 8.04972 6.55307 7.81926C6.62333 7.5888 6.74396 7.37685 6.90622 7.19875C7.05998 7.02837 7.24809 6.89249 7.45815 6.80007C7.66822 6.70764 7.89548 6.66075 8.12497 6.6625H13C13.3756 6.65332 13.7428 6.7746 14.0391 7.0057C14.3354 7.2368 14.5424 7.56343 14.625 7.93C14.625 8.36875 14.7712 8.82375 14.8687 9.2625C15.0565 10.1138 15.3064 10.9502 15.6162 11.765L13.3412 12.8375C12.9502 13.017 12.6463 13.3443 12.4962 13.7475C12.3337 14.1431 12.3337 14.5869 12.4962 14.9825C14.8349 19.992 18.8617 24.0188 23.8712 26.3575C24.2668 26.52 24.7106 26.52 25.1062 26.3575C25.5095 26.2074 25.8367 25.9035 26.0162 25.5125L27.04 23.2375C27.8783 23.5432 28.736 23.7929 29.6075 23.985C30.03 24.0825 30.485 24.1637 30.9237 24.2287C31.2903 24.3113 31.6169 24.5183 31.848 24.8146C32.0791 25.1109 32.2004 25.4781 32.1912 25.8537L32.3375 30.875ZM22.75 3.25C22.3762 3.25 21.9862 3.25 21.6125 3.25C21.1815 3.28663 20.7827 3.49297 20.5039 3.82362C20.225 4.15427 20.089 4.58215 20.1256 5.01312C20.1622 5.4441 20.3686 5.84287 20.6992 6.12172C21.0299 6.40056 21.4577 6.53663 21.8887 6.5H22.75C25.3358 6.5 27.8158 7.52723 29.6443 9.35571C31.4727 11.1842 32.5 13.6641 32.5 16.25C32.5 16.5425 32.5 16.8187 32.5 17.1112C32.4639 17.5399 32.5994 17.9654 32.8766 18.2944C33.1538 18.6234 33.5501 18.829 33.9787 18.8662H34.1087C34.5155 18.8679 34.9081 18.7169 35.209 18.4431C35.5099 18.1693 35.6971 17.7926 35.7337 17.3875C35.7337 17.0137 35.7337 16.6237 35.7337 16.25C35.7337 12.805 34.3663 9.50086 31.9319 7.06335C29.4974 4.62585 26.195 3.25431 22.75 3.25ZM26 16.25C26 16.681 26.1712 17.0943 26.4759 17.399C26.7807 17.7038 27.194 17.875 27.625 17.875C28.056 17.875 28.4693 17.7038 28.774 17.399C29.0788 17.0943 29.25 16.681 29.25 16.25C29.25 14.5261 28.5652 12.8728 27.3462 11.6538C26.1272 10.4348 24.4739 9.75 22.75 9.75C22.319 9.75 21.9057 9.9212 21.6009 10.226C21.2962 10.5307 21.125 10.944 21.125 11.375C21.125 11.806 21.2962 12.2193 21.6009 12.524C21.9057 12.8288 22.319 13 22.75 13C23.6119 13 24.4386 13.3424 25.0481 13.9519C25.6576 14.5614 26 15.388 26 16.25Z" fill="#324152" />
        </svg>
      </button>
      <button>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M29.3171 36.2069H10.3516C7.49989 36.2069 5.1792 33.8862 5.1792 31.0345V18.9655C5.1792 16.1138 7.49989 13.7931 10.3516 13.7931H29.3171C32.1689 13.7931 34.4895 16.1138 34.4895 18.9655V31.0345C34.4895 33.8862 32.1689 36.2069 29.3171 36.2069ZM10.3516 17.2414C9.89434 17.2414 9.4558 17.423 9.13246 17.7464C8.80912 18.0697 8.62748 18.5082 8.62748 18.9655V31.0345C8.62748 31.4917 8.80912 31.9303 9.13246 32.2536C9.4558 32.577 9.89434 32.7586 10.3516 32.7586H29.3171C29.7744 32.7586 30.2129 32.577 30.5363 32.2536C30.8596 31.9303 31.0413 31.4917 31.0413 31.0345V18.9655C31.0413 18.5082 30.8596 18.0697 30.5363 17.7464C30.2129 17.423 29.7744 17.2414 29.3171 17.2414H10.3516Z" fill="#324152" />
          <path d="M37.9344 33.7708C37.0378 33.7708 36.162 33.4207 35.4999 32.7587L31.5464 28.8052C31.3861 28.6453 31.2589 28.4553 31.1722 28.2462C31.0855 28.037 31.041 27.8127 31.0413 27.5863V22.4139C31.0413 21.9552 31.2223 21.5173 31.5464 21.1949L35.4999 17.2414C35.9812 16.7575 36.5958 16.4279 37.2652 16.2947C37.9346 16.1614 38.6285 16.2305 39.2585 16.4932C39.8893 16.7532 40.4284 17.195 40.8073 17.7624C41.1861 18.3298 41.3876 18.9971 41.3861 19.6794V30.3208C41.3877 30.7744 41.2995 31.2239 41.1266 31.6433C40.9536 32.0627 40.6994 32.4437 40.3786 32.7644C40.0577 33.0851 39.6765 33.3392 39.257 33.5119C38.8375 33.6846 38.388 33.7726 37.9344 33.7708ZM34.4895 26.8725L37.9378 30.3208V19.6794L34.4895 23.1276V26.8725Z" fill="#324152" />
          <path d="M44.8345 33.7672C44.3772 33.7672 43.9387 33.5855 43.6153 33.2622C43.292 32.9389 43.1104 32.5003 43.1104 32.0431V17.9517C43.1104 17.4944 43.292 17.0559 43.6153 16.7325C43.9387 16.4092 44.3772 16.2275 44.8345 16.2275C45.2918 16.2275 45.7303 16.4092 46.0536 16.7325C46.377 17.0559 46.5586 17.4944 46.5586 17.9517V32.0431C46.5586 32.5003 46.377 32.9389 46.0536 33.2622C45.7303 33.5855 45.2918 33.7672 44.8345 33.7672Z" fill="#324152" />
          <path d="M6.88968 20.6879H5.16554C4.70827 20.6879 4.26973 20.5063 3.94639 20.1829C3.62306 19.8596 3.44141 19.421 3.44141 18.9638C3.44141 18.5065 3.62306 18.068 3.94639 17.7446C4.26973 17.4213 4.70827 17.2396 5.16554 17.2396H6.88968C7.34695 17.2396 7.78549 17.4213 8.10883 17.7446C8.43217 18.068 8.61382 18.5065 8.61382 18.9638C8.61382 19.421 8.43217 19.8596 8.10883 20.1829C7.78549 20.5063 7.34695 20.6879 6.88968 20.6879Z" fill="#324152" />
        </svg>
      </button>
      <button>
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
          <path d="M32.5739 9.46956L23.5336 0.430435C22.9596 -0.143478 22.0627 -0.143478 21.4887 0.430435C21.3811 0.538043 18.7623 3.22826 19.7668 6.74348L15.6771 10.8326C13.417 10.1511 7.64123 8.96739 3.37219 13.2359C2.7982 13.8098 2.7982 14.7065 3.37219 15.2804L9.54257 21.45L0.430492 30.5609C-0.143497 31.1348 -0.143497 32.0315 0.430492 32.6054C0.717487 32.8565 1.07623 33 1.43497 33C1.79372 33 2.15246 32.8565 2.43945 32.5696L11.5515 23.4587L17.7219 29.6283C18.0089 29.9152 18.3677 30.0587 18.7264 30.0587C19.0851 30.0587 19.4439 29.9152 19.7309 29.6283C23.9999 25.3598 22.8161 19.5489 22.1345 17.325L26.2241 13.2359C29.7398 14.2402 32.3945 11.6217 32.538 11.5141C33.1479 10.9402 33.1479 10.0435 32.5739 9.46956ZM26.5111 10.2587C25.973 10.0076 25.3273 10.1152 24.8968 10.5457L19.5156 15.9261C19.121 16.3207 18.9775 16.9663 19.1928 17.4685C19.1928 17.4685 19.8385 19.0826 19.9461 21.163C20.0537 23.2435 19.6233 25.0011 18.6547 26.4717L12.556 20.4457L6.45738 14.3478C10.2959 11.7652 15.2466 13.7022 15.4618 13.8098C16 14.025 16.6098 13.9174 17.0403 13.487L22.4215 8.10652C22.8519 7.67609 22.9596 7.03044 22.7084 6.49239C22.2062 5.4163 22.3856 4.44783 22.7084 3.69457L29.3093 10.2946C28.5918 10.5815 27.5874 10.7609 26.5111 10.2587ZM18.0089 18.0424C18.0448 18.15 18.5112 19.1902 18.4753 20.3022C18.4753 20.9837 17.9013 21.5217 17.2197 21.5217H17.1838C16.5022 21.4859 15.9282 20.912 15.9641 20.2304C15.9641 19.7641 15.7847 19.2261 15.713 19.0467C15.426 18.4011 15.713 17.6837 16.3587 17.3967C17.0044 17.1457 17.7578 17.3967 18.0089 18.0424Z" fill="#324152" />
        </svg>
      </button>
      <button>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" >
          <path d="M19.22 26.66C19.22 24.6084 17.5516 22.94 15.5 22.94C13.4484 22.94 11.78 24.6084 11.78 26.66C11.78 28.7116 13.4484 30.38 15.5 30.38C17.5516 30.38 19.22 28.7116 19.22 26.66ZM13.02 26.66C13.02 25.2923 14.1323 24.18 15.5 24.18C16.8677 24.18 17.98 25.2923 17.98 26.66C17.98 28.0277 16.8677 29.14 15.5 29.14C14.1323 29.14 13.02 28.0277 13.02 26.66ZM15.5 19.22C17.5516 19.22 19.22 17.5516 19.22 15.5C19.22 13.4484 17.5516 11.78 15.5 11.78C13.4484 11.78 11.78 13.4484 11.78 15.5C11.78 17.5516 13.4484 19.22 15.5 19.22ZM15.5 13.02C16.8677 13.02 17.98 14.1323 17.98 15.5C17.98 16.8677 16.8677 17.98 15.5 17.98C14.1323 17.98 13.02 16.8677 13.02 15.5C13.02 14.1323 14.1323 13.02 15.5 13.02ZM11.78 4.34001C11.78 6.39159 13.4484 8.06001 15.5 8.06001C17.5516 8.06001 19.22 6.39159 19.22 4.34001C19.22 2.28843 17.5516 0.62001 15.5 0.62001C13.4484 0.62001 11.78 2.28843 11.78 4.34001ZM17.98 4.34001C17.98 5.70773 16.8677 6.82001 15.5 6.82001C14.1323 6.82001 13.02 5.70773 13.02 4.34001C13.02 2.97229 14.1323 1.86001 15.5 1.86001C16.8677 1.86001 17.98 2.97229 17.98 4.34001Z" fill="#324152" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonsGroup;
