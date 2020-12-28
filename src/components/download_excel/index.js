import React from "react";
// import ReactExport from "react-data-export";

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class DownloadExcel extends React.Component {
    render() {
        // const downloadData = this.props.data;
        // let headers = this.props.headers;
        // let path = this.props.path;
        // const fileName = this.props.filename;
        return (
            <div>
                {/* <ExcelFile filename={fileName} hideElement={true}
            // fileExtension="CSV"
            >
                <ExcelSheet data={downloadData} name={fileName}>
                    {path.map((value, i) =>
                        <ExcelColumn key={i} label={`${headers[i]}`} value={`${value}`} />
                    )}
                </ExcelSheet>
            </ExcelFile> */}
            </div>
        );

    }
}

export default DownloadExcel;