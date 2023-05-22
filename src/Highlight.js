import * as React from "react";
import { Viewer ,  Worker } from '@react-pdf-viewer/core';
import { searchPlugin , OnHighlightKeyword } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { MinimalButton, Spinner, TextBox , Button} from '@react-pdf-viewer/core';
import { NextIcon, PreviousIcon } from '@react-pdf-viewer/search';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const SearchStatus  = {
    NotSearchedYet:"NotSearchedYet",
    Searching:"Searching",
    FoundResults:"FoundResults",
}



const Highlight = ({file , highlight_sections}) => {

    const fileUrl = 'test.pdf';
    const searchPluginInstance = searchPlugin({
        onHighlightKeyword: (props) => {
            props.highlightEle.style.backgroundColor = 'rgba(137, 30, 83, .3)';
        },
    });
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const toolbarPluginInstance = toolbarPlugin({pageNavigationPlugin:pageNavigationPluginInstance});
    const defaultLayoutPluginInstance = defaultLayoutPlugin();


    const { jumpToPage } = pageNavigationPluginInstance;

    const [searchStatus, setSearchStatus] = React.useState(SearchStatus.NotSearchedYet);
    const [matches, setMatches] = React.useState([]);
    const [isDocumentReady, setIsDocumentReady] = React.useState(false);
    const [currentKeywordIndex, setCurrentKeywordIndex] =  React.useState(0);

    const searchstring = highlight_sections[3].content;
    const targetPage = highlight_sections[3].page_no;



    const { Search , highlight } = searchPluginInstance;

    const renderMatchSample = (match) => {
        const wordsBefore = match.pageText.substr(match.startIndex - 20, 20);
        let words = wordsBefore.split(' ');
        words.shift();
        const begin = words.length === 0 ? wordsBefore : words.join(' ');

        const wordsAfter = match.pageText.substr(match.endIndex, 60);
        words = wordsAfter.split(' ');
        words.pop();
        const end = words.length === 0 ? wordsAfter : words.join(' ');

        return (
            <div>
                {begin}
                <span style={{ backgroundColor: 'rgb(255, 255, 0)' }}>
                    {match.pageText.substring(match.startIndex, match.endIndex)}
                </span>
                {end}
            </div>
        );
    };




    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, .3)',
                display: 'flex',
                height: '100%',
                width: '100%',
            }}
        >
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, .2)',
                    flex: '0 0 15rem',
                    width: '15rem',
                }}
            >
                <Search>
            {(renderSearchProps) => {
                // setRenderProps(renderSearchProps);
                const { currentMatch, keyword, setKeyword, jumpToMatch, jumpToNextMatch, jumpToPreviousMatch, search ,setTargetPages } =
                    renderSearchProps;

                function setKeyWordFromContext(context_string){
                  let split_keywords = context_string.split(" ");
                  if(currentKeywordIndex == 0){
                    setKeyword(split_keywords[0]);
                    setCurrentKeywordIndex(0);
                  }else{
                    setKeyword(split_keywords[currentKeywordIndex+1]);
                    setCurrentKeywordIndex(currentKeywordIndex++);
                    handleSearchKeyDown({key:"Enter"});
                  }
                }

                const handleSearchKeyDown = (e) => {
                    console.log(" handleSearchKeyDown :: ", e.key, "    :: ",keyword);
                    
                    if (e.key === 'Enter' && keyword) {
                        setSearchStatus(SearchStatus.Searching);
                        search().then((matches) => {

                            if(matches.length){

                              console.log("matches :: ",matches);
                              setSearchStatus(SearchStatus.FoundResults);
                              setMatches([matches[0]]);

                              let split_context = searchstring.split(' ');
                            //   let split_page_content = matches[0].pageText.split(" ");
                            //   let split_page_content_keyword_index = split_page_content.findIndex(word => word ==split_context[currentKeywordIndex])
                              
                              let highlightKeywords = split_context.reduce((data,currentValue)=>{

                                if(data.length == 0){
                                    data.push(currentValue);
                                }else{
                                    let lastEntry = data[data.length-1].split(" ");
                                    // console.log("last :: ",lastEntry)
                                    if(lastEntry.length >2){
                                        data.push(currentValue)
                                    }else{
                                        lastEntry.push(currentValue)
                                        data[data.length-1] = lastEntry.join(" ")
                                        
                                    }
                                    
                                }
                                return data;
                               },[]);
                               console.log("highlights :: ", highlightKeywords)
                           
                               highlight(highlightKeywords)
                              // for(let i = split_page_content_keyword_index; i < split_context.length; i++){
                              //   if(split_context)
                              // }
                            }else{
                              setKeyWordFromContext(searchstring);
                            }
                        });
                    }
                }


                return (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            overflow: 'hidden',
                            width: '100%',
                        }}
                    >
                        <div style={{ padding: '.5rem' }}>
                            <div style={{ position: 'relative' }}>

                                <Button  onClick={()=>{
                           
                                  setKeyWordFromContext(searchstring);
                                  jumpToPage(targetPage);
                                  setTargetPages(target=>{ 
                                    return target.pageIndex == targetPage;
                                  });
                                  
                                }} > Fetch Context </Button>

                                <Button  onClick={()=>{
                               
                                  handleSearchKeyDown({key:"Enter"})
                                }} > Get Context </Button>


                                <TextBox
                                    placeholder="Enter to search"
                                    value={keyword}
                                    onChange={setKeyword}
                                    onKeyDown={handleSearchKeyDown}
                                />
                                {searchStatus === SearchStatus.Searching && (
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            bottom: 0,
                                            position: 'absolute',
                                            right: '.5rem',
                                            top: 0,
                                        }}
                                    >
                                        <Spinner size="1.5rem" />
                                    </div>
                                )}
                            </div>
                        </div>
                        {searchStatus === SearchStatus.FoundResults && (
                            <>
                                {matches.length === 0 && 'Not found'}
                                {matches.length > 0 && (
                                    <>
                                        <div
                                            style={{
                                                alignItems: 'center',
                                                display: 'flex',
                                                padding: '.5rem',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    color: 'rgba(0, 0, 0, .5)',
                                                    fontSize: '.8rem',
                                                    marginRight: '.5rem',
                                                }}
                                            >
                                                Found {matches.length} results
                                            </div>
                                            <div style={{ marginLeft: 'auto', marginRight: '.5rem' }}>
                                                <MinimalButton onClick={jumpToPreviousMatch}>
                                                    <PreviousIcon />
                                                </MinimalButton>
                                            </div>
                                            <MinimalButton onClick={jumpToNextMatch}>
                                                <NextIcon />
                                            </MinimalButton>
                                        </div>
                                        <div
                                            style={{
                                                borderTop: '1px solid rgba(0, 0, 0, .2)',
                                                flex: 1,
                                                overflow: 'auto',
                                                padding: '.5rem 1rem',
                                            }}
                                        >
                                            {matches.map((match, index) => (
                                                <div key={index} style={{ margin: '1rem 0' }}>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            marginBottom: '.5rem',
                                                        }}
                                                    >
                                                        <div>#{index + 1}</div>
                                                        <div
                                                            style={{
                                                                color: 'rgba(0, 0, 0, .5)',
                                                                fontSize: '.8rem',
                                                                textAlign: 'right',
                                                            }}
                                                        >
                                                            Page {match.pageIndex + 1}
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                currentMatch === index + 1 ? 'rgba(0, 0, 0, .1)' : '',
                                                            border: '1px solid rgba(0, 0, 0, .2)',
                                                            borderRadius: '.25rem',
                                                            cursor: 'pointer',
                                                            overflowWrap: 'break-word',
                                                            padding: '.5rem',
                                                        }}
                                                        onClick={() => jumpToMatch(index + 1)}
                                                    >
                                                        {renderMatchSample(match)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                );
            }}
        </Search>
            </div>

            <div style={{ flex: 1 ,height:"800px", width:"700px", margin:"auto" }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.js">
                <Viewer 
                fileUrl={fileUrl} 
                plugins={[
                  pageNavigationPluginInstance,
                  searchPluginInstance,
                  toolbarPluginInstance,
                  defaultLayoutPluginInstance
                ]} 
                  onDocumentLoad={()=>{setIsDocumentReady(true)}}
                  onPageChange={(details)=>{console.log("page was changed :: ",details)}}
                  />
            </Worker>
            </div>
        </div>
    );
}

export default Highlight;