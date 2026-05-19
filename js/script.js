gsap.registerPlugin(ScrollTrigger, SplitText);

const linhaDoTempo = gsap.timeline()


const split = new SplitText(".animado",{
    type: "chars",
    mask: "lines"
})

linhaDoTempo.from(split.chars,{
    opacity:0,
    y:50,
    duration: 2,   
    stagger: 0.01,
    filter: "blur(5px)"
})

const TextosAnimado = document.querySelectorAll(".textoAnimado");

TextosAnimado.forEach((texto) =>{
    const split = new SplitText(texto, {type: "lines"});

    gsap.from(split.lines, {
        opacity:0,
        stagger: 0.01,
        y: 100,
        duration: 2,
        filter: "blur(10px)",
        scrollTrigger: {
            trigger: texto,
            markers: false,
            start: "30% 80%",
            end: "100% 50%",
        }

    })
})



