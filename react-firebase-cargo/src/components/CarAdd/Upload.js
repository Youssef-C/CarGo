import React from "react";
import styled from "styled-components";

class Upload extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        file: null
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      })
    }
    render() {
      return (
        <Preview.Wrapper>
          <Preview.Input type="file" id="files" class="hidden" onChange={this.handleChange}/>
          <Preview.Label for="files"> Select Image</Preview.Label>
          <Preview.ImageContainer>
            <Preview.Image src={this.state.file} alt="preview" />
          </Preview.ImageContainer>
        </Preview.Wrapper>
      );
    }
  }
  export default Upload;


  const Preview = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 250px;
        height: 250px;

        [type=file]{
            position: absolute;
            filter: alpha(opacity=0);
            opacity: 0;
        }

        [type=file] + label {
            display: inline-block;
            text-align: center;
            width: 210px;
            padding: 12px;
            background-color: rgba(67, 69, 108, 1);
            font-size: 24px;
            /* Decorative */
            color: #fff;
            border: none;
            border-radius: 24px;
            cursor: pointer;
            margin: 10px;
            }
    `,

    ImageContainer: styled.div`
        display: flex;
        background-color: rgba(0,0,0, 0.2);
        border-radius: 24px;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 110px;
    `,

    Image: styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 24px;
    `,

    Label: styled.label``,

    Input: styled.input`
         
    `,
}