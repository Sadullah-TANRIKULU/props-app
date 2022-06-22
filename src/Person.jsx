import Msg from "./Msg";

const Person = ({name, img, tel}) => {
    // const {name, img, tel} = props;
    return (
        <div>
            <Msg isim={name} />
            <h3>merhaba {name} </h3>
            <img src={img} alt="" />
            <p>{tel}</p>
        </div>
    );
}

export default Person;