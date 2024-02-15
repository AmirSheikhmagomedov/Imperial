'use client'
import useDownloader from 'react-use-downloader'

export default function SaveButton({
  dictionary,
  path,
  fileName,
}: {
  dictionary: any
  path: string
  fileName: string
}) {
  const { download } = useDownloader()

  return (
    <button
      className="h-[48px] font-bold bg-white hover:bg-blue-100 border-grey-border-color border-[1px] rounded-[4px] px-[12px] py-[16px]"
      onClick={() => {
        download(
          `${window.location.protocol}//${window.location.host}/assets${path}`,
          fileName
        )
      }}
    >
      {dictionary}
    </button>
  )
}
