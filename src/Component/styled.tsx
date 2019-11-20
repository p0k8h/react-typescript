import styled from "styled-components";

interface IProps {
  done?: boolean;
}

export const Container = styled.div`
  background: rgb(41, 33, 33);
  width: 40vw;
  margin: 10em auto;
  border-radius: 15px;
  padding: 20px 10px;
  color: white;
  border: 3px solid rgb(36, 110, 194);
`;

export const Task = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5em;
  margin: 0.5em;
  text-decoration: ${(props: IProps) => (props.done ? "line-through" : "")};
  button {
    background: rgb(12, 124, 251);
    border-radius: 5px;
    margin: 0px 5px;
    padding: 3px 5px;
    border: none;
    cursor: pointer;
    color: white;
    float: right;
  }
`;

export const Header = styled.div`
  margin: 0.5em;
  font-size: 2em;
  text-align: center;
`;

export const Form = styled.form``;

export const CreateTask = styled.div`
  input[type="text"] {
    margin: 2.5em 2em;
    width: 80%;
    outline: none;
    border: none;
    padding: 0.7em;
  }
`;
