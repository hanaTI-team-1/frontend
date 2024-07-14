export default function JeonseInfo({ protect }) {
  return (
    <>
      <div className="mt-4 mb-4 text-2xl font-bold">상세 정보</div>
      <div className="w-[450px]">
        <JeonseInfoRaw title={["매물특징"]} content={[protect.atclFetrDesc]} />
        <JeonseInfoRaw
          title={["공급/전용면적", "방정보1"]}
          content={[protect.spc2 + "/" + protect.spc1, protect.tag1]}
        />
        <JeonseInfoRaw
          title={["해당층/총층", "방정보2"]}
          content={[protect.flrInfo, protect.tag2]}
        />
        <JeonseInfoRaw
          title={["방향", "방정보3"]}
          content={[protect.direction, protect.tag3]}
        />
      </div>
    </>
  );
}

function JeonseInfoRaw({ title, content }) {
  return (
    <>
      {title.length === 1 ? (
        <div className="flex w-full">
          <div className="bg-slate-300 pt-1 pb-1 w-[112.5px] border-2 border-t-slate-600 border-b-slate-600">
            {title[0]}
          </div>
          <div className="pt-1 pb-1 w-[337.5px] border-2">{content[0]}</div>
        </div>
      ) : (
        <div className="flex w-full">
          <div className="bg-slate-300 pt-1 pb-1 w-[112.5px] border-2 border-b-slate-600">
            {title[0]}
          </div>
          <div className="pt-1 pb-1 w-[112.5px] border-2">{content[0]}</div>
          <div className="bg-slate-300 pt-1 pb-1 w-[112.5px] border-2 border-b-slate-600">
            {title[1]}
          </div>
          <div className="pt-1 pb-1 w-[112.5px] border-2">{content[1]}</div>
        </div>
      )}
    </>
  );
}
