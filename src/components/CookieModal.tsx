import { useCallback, useEffect, useState } from "react";

const CookieModal = ({ handleButtonClick }: { handleButtonClick: (choice: string) => void }) => {
    const handleModalClose = (choice: string) => {
        const modalElement = document.querySelector(".cookie-modal");
        if (modalElement) {
          modalElement.classList.remove("visible");
          setTimeout(() => handleButtonClick(choice), 1200);
        }
      };
      
      useEffect(() => {
        const modalElement = document.querySelector(".cookie-modal");
        const timer = setTimeout(() => {
          if (modalElement) {
            modalElement.classList.add("visible");
          }
        }, 2000);
      
        return () => clearTimeout(timer);
      }, []);

    return (
        <div className="fixed bottom-0 bg-[#F8FBFC] z-[20] p-6 shadow-shadow card sm:m-5 sm:max-w-xl lg:max-w-3xl cookie-modal">
            <p className="text-[#292929] font-light">
              We use cookies to improve site navigation, analyze site usage, and enhance your user experience. Click &quot;Accept&quot; to enable cookies or &quot;Reject&quot; to reject cookies.
            </p>

            <div className="mt-8 flex gap-3 justify-end">
                <button
                    className="text-white bg-[#7147E8] rounded-3xl py-2 px-8 text-sm"
                    onClick={() => handleModalClose('Accept')}
                >
                    Accept
                </button>
                <button
                    className="text-[#7147E8] bg-white border-[1px] border-[#7147E8] rounded-3xl py-2 px-8 text-sm"
                    onClick={() => handleModalClose('Decline')}
                >
                    Reject
                </button>
            </div>
        </div>        
    )
}

export default CookieModal