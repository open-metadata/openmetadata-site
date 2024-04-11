import {COPY_CODE_TEXT} from "@/constants/CopyCode.constants";
import {useClipboard} from "@/hooks/useClipBoard";
import Link from "next/link";
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
      <div className="lg:max-w-2xl text-center max-lg:w-full ">
        <div className="text-5xl text-gray-900 font-light mb-3">
          Ready to Start?
        </div>
        <h4>Run this command to get OpenMetadata up & running with Docker.</h4>
        <div className="relative bg-[#212832] text-white p-3 rounded-[0.35rem] my-4 text-start font-mono items-center">
          {copiedText}
          <button
            type="button"
            className="btn-sm group py-1 px-2 right-2 top-4 absolute border-white border-1 rounded flex gap-1 items-center hover:bg-slate-200 hover:color"
            id="om-command-copy-button"
            onClick={() => onCopyToClipBoard()}
            title="Copy"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-copy me-2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
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
          <Link
            className="btn btn-primary fw-500 mr-2 max-sm:mb-2"
            href="https://docs.open-metadata.org/deployment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy in Production
          </Link>
          <Link
            className="btn btn-primary fw-500"
            href="https://docs.open-metadata.org/deployment/kubernetes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy in Kubernetes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyCode;
