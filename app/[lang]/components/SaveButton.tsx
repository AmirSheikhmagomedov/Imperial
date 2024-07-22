'use client'
import useDownloader from 'react-use-downloader'

export default function SaveButton({
  dictionary,
  path,
  fileName,
  isBlue,
}: {
  dictionary: any
  path: string
  fileName: string
  isBlue?: boolean
}) {
  const { download } = useDownloader()

  const styles = isBlue
    ? 'bg-main-blue hover:bg-blue-hover text-white px-[12px] py-[16px] rounded-[4px] leading-[100%] font-bold'
    : 'h-[48px] font-bold bg-white hover:bg-blue-100 border-grey-border-color border-[1px] rounded-[4px] px-[12px] py-[16px]'

  return (
    <button
      className={styles}
      onClick={() => {
        download(
          `${window.location.protocol}//${window.location.host}/assets${path}`,
          fileName,
        )
      }}
    >
      {dictionary}
    </button>
  )
}
