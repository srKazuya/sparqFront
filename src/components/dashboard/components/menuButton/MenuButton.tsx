import React from 'react';

const MenuButton: React.FC = () => {
  return (
    <button className='dashboard-button_container'>
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.373 3.35693H7.55336C6.4404 3.35693 5.37302 3.79906 4.58604 4.58604C3.79906 5.37302 3.35693 6.4404 3.35693 7.55336V17.373C3.35693 18.486 3.79906 19.5533 4.58604 20.3403C5.37302 21.1273 6.4404 21.5694 7.55336 21.5694H17.373C18.486 21.5694 19.5533 21.1273 20.3403 20.3403C21.1273 19.5533 21.5694 18.486 21.5694 17.373V7.55336C21.5694 6.4404 21.1273 5.37302 20.3403 4.58604C19.5533 3.79906 18.486 3.35693 17.373 3.35693ZM18.2123 17.373C18.2123 17.5956 18.1239 17.8091 17.9665 17.9665C17.8091 18.1239 17.5956 18.2123 17.373 18.2123H7.55336C7.33077 18.2123 7.11729 18.1239 6.9599 17.9665C6.8025 17.8091 6.71408 17.5956 6.71408 17.373V7.55336C6.71408 7.33077 6.8025 7.11729 6.9599 6.9599C7.11729 6.8025 7.33077 6.71408 7.55336 6.71408H17.373C17.5956 6.71408 17.8091 6.8025 17.9665 6.9599C18.1239 7.11729 18.2123 7.33077 18.2123 7.55336V17.373ZM39.4462 3.35693H29.6266C28.5136 3.35693 27.4462 3.79906 26.6593 4.58604C25.8723 5.37302 25.4301 6.4404 25.4301 7.55336V17.373C25.4301 18.486 25.8723 19.5533 26.6593 20.3403C27.4462 21.1273 28.5136 21.5694 29.6266 21.5694H39.4462C40.5592 21.5694 41.6266 21.1273 42.4135 20.3403C43.2005 19.5533 43.6426 18.486 43.6426 17.373V7.55336C43.6426 6.4404 43.2005 5.37302 42.4135 4.58604C41.6266 3.79906 40.5592 3.35693 39.4462 3.35693ZM40.2855 17.373C40.2855 17.5956 40.1971 17.8091 40.0397 17.9665C39.8823 18.1239 39.6688 18.2123 39.4462 18.2123H29.6266C29.404 18.2123 29.1905 18.1239 29.0331 17.9665C28.8757 17.8091 28.7873 17.5956 28.7873 17.373V7.55336C28.7873 7.33077 28.8757 7.11729 29.0331 6.9599C29.1905 6.8025 29.404 6.71408 29.6266 6.71408H39.4462C39.6688 6.71408 39.8823 6.8025 40.0397 6.9599C40.1971 7.11729 40.2855 7.33077 40.2855 7.55336V17.373ZM17.373 25.3714H7.55336C6.4404 25.3714 5.37302 25.8135 4.58604 26.6005C3.79906 27.3875 3.35693 28.4549 3.35693 29.5678V39.3791C3.35693 40.492 3.79906 41.5594 4.58604 42.3464C5.37302 43.1334 6.4404 43.5755 7.55336 43.5755H17.373C18.486 43.5755 19.5533 43.1334 20.3403 42.3464C21.1273 41.5594 21.5694 40.492 21.5694 39.3791V29.5678C21.5694 28.4549 21.1273 27.3875 20.3403 26.6005C19.5533 25.8135 18.486 25.3714 17.373 25.3714ZM18.2123 39.3791C18.2123 39.6017 18.1239 39.8151 17.9665 39.9725C17.8091 40.1299 17.5956 40.2184 17.373 40.2184H7.55336C7.33077 40.2184 7.11729 40.1299 6.9599 39.9725C6.8025 39.8151 6.71408 39.6017 6.71408 39.3791V29.5678C6.71408 29.3452 6.8025 29.1318 6.9599 28.9744C7.11729 28.817 7.33077 28.7285 7.55336 28.7285H17.373C17.5956 28.7285 17.8091 28.817 17.9665 28.9744C18.1239 29.1318 18.2123 29.3452 18.2123 29.5678V39.3791ZM41.9641 25.3714H27.0416C26.5964 25.3714 26.1694 25.5482 25.8546 25.863C25.5399 26.1778 25.363 26.6048 25.363 27.05C25.363 27.4952 25.5399 27.9221 25.8546 28.2369C26.1694 28.5517 26.5964 28.7285 27.0416 28.7285H41.9641C42.4093 28.7285 42.8362 28.5517 43.151 28.2369C43.4658 27.9221 43.6426 27.4952 43.6426 27.05C43.6426 26.6048 43.4658 26.1778 43.151 25.863C42.8362 25.5482 42.4093 25.3714 41.9641 25.3714ZM41.9641 32.8243H27.0416C26.5964 32.8243 26.1694 33.0011 25.8546 33.3159C25.5399 33.6307 25.363 34.0576 25.363 34.5028C25.363 34.948 25.5399 35.375 25.8546 35.6898C26.1694 36.0045 26.5964 36.1814 27.0416 36.1814H41.9641C42.4093 36.1814 42.8362 36.0045 43.151 35.6898C43.4658 35.375 43.6426 34.948 43.6426 34.5028C43.6426 34.0576 43.4658 33.6307 43.151 33.3159C42.8362 33.0011 42.4093 32.8243 41.9641 32.8243ZM41.9641 40.2855H27.0416C26.5964 40.2855 26.1694 40.4624 25.8546 40.7771C25.5399 41.0919 25.363 41.5189 25.363 41.9641C25.363 42.4093 25.5399 42.8362 25.8546 43.151C26.1694 43.4658 26.5964 43.6426 27.0416 43.6426H41.9641C42.4093 43.6426 42.8362 43.4658 43.151 43.151C43.4658 42.8362 43.6426 42.4093 43.6426 41.9641C43.6426 41.5189 43.4658 41.0919 43.151 40.7771C42.8362 40.4624 42.4093 40.2855 41.9641 40.2855Z" fill="#324152"/>
</svg>

    </button>
  );
  
};

export default MenuButton;