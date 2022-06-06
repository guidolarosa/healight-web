const FadeUp = (props : any) => {
    return (
        <div data-aos="fade-up">
            {props.children}
        </div>
    )
};

export default FadeUp;