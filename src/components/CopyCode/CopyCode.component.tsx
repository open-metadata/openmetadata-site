import {COPY_CODE_TEXT} from "@/constants/CopyCode.constants";
import {useClipboard} from "@/hooks/useClipBoard";
import React, {useMemo} from "react";

const CopyCode: React.FC = () => {
  const {onCopyToClipBoard, hasCopied} = useClipboard(COPY_CODE_TEXT);

  const copiedText = useMemo(() => {
    return (
      hasCopied && (
        <span className="text-[#008376] bg-[#a0f1e9] transition-all duration-[0.7s] ease-[ease-in-out] mr-1 px-1 rounded-md right-[6.5em] top-[1.5em] absolute">
          Copied!
        </span>
      )
    );
  }, [hasCopied]);

  return (
    <div className="flex justify-center">
      <div className="lg:max-w-3xl text-center max-lg:w-full ">
        <div className="text-3xl text-gray-900 mb-3">Ready to Start?</div>
        <h4>Run this command to get OpenMetadata up & running with Docker.</h4>
        <div className="relative bg-[#212832] text-white p-4 rounded-[0.35rem] my-4 text-start font-mono items-center">
          {copiedText}
          <button
            type="button"
            className="btn-sm group py-2 px-2 right-4 top-4 absolute border-white border-1 rounded flex gap-1 items-center hover:bg-slate-200 hover:color"
            id="om-command-copy-button"
            onClick={() => onCopyToClipBoard()}
            title="Copy"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                />
              </svg>
            </span>
            <span className="group-hover:text-black max-sm:hidden">Copy</span>
          </button>
          <span style={{overflowWrap: "anywhere"}}>
            mkdir openmetadata-docker &amp;&amp; cd openmetadata-docker
            <br />
            wget -O
            https://github.com/open-metadata/OpenMetadata/releases/download/1.2.0-release/docker-compose.yml
            <br />
            docker compose -f docker-compose.yml up --detach
          </span>
        </div>
        <div>
          <a
            className="btn btn-primary fw-500 mr-2 max-sm:mb-2"
            href="https://docs.open-metadata.org/deployment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy in Production
          </a>
          <a
            className="btn btn-primary fw-500"
            href="https://docs.open-metadata.org/deployment/kubernetes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy in Kubernetes
          </a>
        </div>
      </div>
    </div>
  );
};

export default CopyCode;
