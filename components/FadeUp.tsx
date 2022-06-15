const FadeUp = (props : any) => {
    return (
        <div data-aos="fade-up" width={"100%"}>
            {props.children}
        </div>
    )
};

export default FadeUp;