import MuxLoader from //   MuxUploaderFileSelect, //   MuxUploaderDrop,
//   MuxUploaderProgress,
//   MuxUploaderStatus,
"@mux/mux-uploader-react";

interface StudioUploaderProps {
  endpoint?: string | null;
  onSuccess: () => void;
}

export const StudioUploader = ({
  //   onSuccess,
  endpoint,
}: StudioUploaderProps) => {
  return (
    <div>
      <MuxLoader endpoint={endpoint} />
    </div>
  );
};
