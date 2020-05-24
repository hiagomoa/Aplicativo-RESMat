import React from 'react';
import { View, Modal, Text } from 'react-native';
import { connect } from 'react-redux';

class Calculo extends React.Component {
    state = {
        resultadoCentroidX: ' ',
        resultadoCentroidY: ' ',
        resultadoMomento: 0,
        flag: 0
    }

    setarResultado = (resCentX, resCentY, resMoment) => {

        if (resCentX != this.state.resultadoCentroidX || resCentY != this.state.resultadoCentroidY || resMoment != this.state.resultadoMomento) {
            this.setState({ resultadoCentroidX: resCentX })
            this.setState({ resultadoCentroidY: resCentY })
            this.setState({ resultadoMomento: resMoment })
            this.setState({ flag: 1 })
        }
    }

    verificacaoAntiLoop = valor => {

        if (valor === 1) {

            this.props.funcao(1);
            this.props.funcao2(this.state.resultadoCentroidX, this.state.resultadoCentroidY, this.state.resultadoMomento);
            this.setState({ flag: 2 })
        }
    }

    CentroideTriangulo = (count1, count2) => {//count1= base count2=altura, 
        let x, y;

        x = (count1 / 2)
        y = (count2 / 3)

        return [x, y, count1, count2];// VetResult[Xi,Yi,TamX,TamY]
    }

    CentroideQuadrado = (count1, count2) => {
        let x, y;

        x = (count1 / 2)
        y = (count1 / 2)

        return [x, y, count1, count1];// VetResult[Xi,Yi,TamX,TamY]

    }

    CentroideCirculo = (count1, count2) => {
        let x, y;

        x = (count1 / 2)
        y = (count1 / 2)

        return [x, y, count1, count1];// VetResult[Xi,Yi,TamX,TamY]
    }
    RetornoBaseMenorTrapezio = (b, ang, h) => {
        //ang em radianos
        let rad = (ang * Math.PI) / 180;
        let tam = h / Math.tan(rad);
        return b - (2 * tam);
    }

    CentroideTrapezio = (b, ang, h) => {
        let rad = (ang * Math.PI) / 180;
        let tam = h / Math.tan(rad);
        // ATE=area triangulo esq   ATD=area triangulo direito  AQ = area quadrado
        let ATE, ATD, AQ;
        ATE = (tam * h) / 2;
        ATD = (tam * h) / 2;
        AQ = (b - 2 * tam) * h;
        //CTXE=centroide triangulo esquerdo em X
        let CTXD = tam / 3;
        let CTY = h / 3;
        let baseMenor = b - 2 * tam;
        CTXD = CTXD + (baseMenor / 2);
        let CTXE = CTXD * -1;
        let CQY = h / 2;
        let Xg = 0;
        let Yg = ((ATE * CTY) + (ATD * CTY) + (AQ * CQY)) / (ATE + ATD + AQ);

        return [Xg, Yg, b, h];// VetResult[Xi,Yi,TamX,TamY]
    }

    centroideHexagono = (count1, count2) => {
        let x, y;

        x = count1;
        y = Math.sqrt(3) * (count1 / 2);

        return [x, y, (count1 * 2), (count1 * 2 * Math.sqrt(3))];
    }
    //Calculo das areas
    Areas = (fig, c1, c2, c3, c4) => {
        let area;
        switch (fig) {
            //OK
            case 1: //triangulo c1=x c2=y
                area = (c1 * c2) / 2;
                break;
            //OK
            case 2: //quadrado l^2
                area = (Math.pow(c1, 2));
                break;
            //OK
            case 3: //circulo   pi*r^2
                area = (Math.PI * (Math.pow((c1 / 2), 2)));
                break;
            //
            case 4: //trapezio c1 base maior c2-angulo esq c3- ang direit c4  
                //FAZER COM Q O ANGULO DO TRANPEZIO SEJA O MESMO
                let aux1, basemen, angrad;
                angrad = c2 * (Math.PI / 180);
                aux1 = (c4 / (Math.tan(angrad)));
                basemen = (c1 - (2 * aux1));
                area = ((c1 + basemen) * c4) / 2;
                break;
            //OK
            case 5: //hexagono
                area = (3 * Math.sqrt(3) * (Math.pow(c1, 2))) / 2;
                break;
            default:

                break;
        }
        return area;
    }

    //calculo final do centro de gravidade X
    CGX = (somAiXi, somAi) => {
        return (somAiXi / somAi);
    }
    //calculo final do centro de gravidade Y
    CGY = (somAiYi, somAi) => {
        return (somAiYi / somAi);
    }

    CalcDist = (Xi, Yi, Xt, Yt) => {
        //Xi e Yi sao da imagem
        //Xt e Yt sao do novo CG
        let result;
        result = (Math.pow((Xt - Xi), 2)) + (Math.pow((Yt - Yi), 2))
        return result;
    }

    CalcMoment = (Mi, Ai, Dis) => {
        let nm; //novo momento
        nm = (Mi + (Ai * Dis));
        return nm;
    }

    render() {

        let count1 = 100, count2 = 200, count3 = 200, count4 = 200;
        let input1A = 0, input1B = 0, input1C = 0, input1D = 0;
        let input2A = 0, input2B = 0, input2C = 0, input2D = 0;
        let input3A = 0, input3B = 0, input3C = 0, input3D = 0;
        let x, y, x1, y1, x2, y2, x3, y3, momento = 0, momento1 = 0, momento2 = 0, momento3 = 0;
        let Xresult, Yresult, MomentoResult;
        let InputRedux = this.props.valor[0];
        let centerX = 0;
        let centerY = 0;
        let id = this.props.id;//figura principal do meio 
        let id1 = this.props.id1;//figura da cima
        let id2 = this.props.id2;//figura da esquerda
        let id3 = this.props.id3;//figura da direita
        let VetResult, VetResult1, VetResult2, VetResult3;
        let FlagFig1 = 0, FlagFig2 = 0, FlagFig3 = 0;
        let AreaFig = 0, AreaFig1 = 0, AreaFig2 = 0, AreaFig3 = 0;
        let AuxFig1 = 0, AuxFig2 = 0, AuxFig3 = 0;

        if (typeof InputRedux.CenterX != "undefined") {

            centerX = parseInt(InputRedux.CenterX);
        }
        if (typeof InputRedux.CenterY != "undefined") {

            centerY = parseInt(InputRedux.CenterY);
        }

        if (typeof this.props.estadoInputCount1[0] != "undefined") {

            count1 = parseInt(this.props.estadoInputCount1[0]);
        }
        if (typeof this.props.estadoInputCount2[0] != "undefined") {
            count2 = parseInt(this.props.estadoInputCount2[0]);
        };
        if (typeof this.props.estadoInputCount3[0] != "undefined") {
            count3 = parseInt(this.props.estadoInputCount3[0]);
        }
        if (typeof this.props.estadoInputCount4[0] != "undefined") {
            count4 = parseInt(this.props.estadoInputCount4[0]);
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        if (typeof this.props.inputTextRedux1A != "") {
            input1A = parseInt(this.props.inputTextRedux1A);
        }
        if (typeof this.props.inputTextRedux1B != "") {
            input1B = parseInt(this.props.inputTextRedux1B);
        };
        if (typeof this.props.inputTextRedux1C != "") {
            input1C = parseInt(this.props.inputTextRedux1C);
        }
        if (typeof this.props.inputTextRedux1D != "") {
            input1D = parseInt(this.props.inputTextRedux1D);
        }
        if (typeof this.props.inputTextRedux2A != "") {
            input2A = parseInt(this.props.inputTextRedux2A);
        }
        if (typeof this.props.inputTextRedux2B != "") {
            input2B = parseInt(this.props.inputTextRedux2B);
        };
        if (typeof this.props.inputTextRedux2C != "") {
            input2C = parseInt(this.props.inputTextRedux2C);
        }
        if (typeof this.props.inputTextRedux2D != "") {
            input2D = parseInt(this.props.inputTextRedux2D);
        }
        if (typeof this.props.inputTextRedux3A != "") {
            input3A = parseInt(this.props.inputTextRedux3A);
        }
        if (typeof this.props.inputTextRedux3B != "") {
            input3B = parseInt(this.props.inputTextRedux3B);
        };
        if (typeof this.props.inputTextRedux3C != "") {
            input3C = parseInt(this.props.inputTextRedux3C);
        }
        if (typeof this.props.inputTextRedux3D != "") {
            input3D = parseInt(this.props.inputTextRedux3D);
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////       

        this.Areas(parseInt(this.props.id), count1, count2, count3, count4);

        this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);

        this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);

        this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);

        if (this.props.id == 1) {
            VetResult = this.CentroideTriangulo(count1, count2);
            VetResult[0] = 0;
            momento = (count1 * Math.pow(count2, 3)) / 36;
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);
        } else if (this.props.id == 2) {
            VetResult = this.CentroideQuadrado(count1, count2);
            VetResult[0] = 0;
            momento = (Math.pow(count1, 4)) / 12;
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);
        } else if (this.props.id == 3) {
            VetResult = this.CentroideCirculo(count1, count2);
            VetResult[0] = 0;
            momento = (Math.PI * Math.pow(count1, 4)) / 64;
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);
        } else if (this.props.id == 4) {
            VetResult = this.CentroideTrapezio(count1, count2, count3);
            VetResult[0] = 0;
            let b = this.RetornoBaseMenorTrapezio(count1, count2, count3);//POssivel erro nos count
            momento = (Math.pow(count3, 3) * (Math.pow(count1, 2) + (4 * count1 * b) + Math.pow(count1, 2))) / (36 * (count1 + b));
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);
        } else if (this.props.id == 5) {
            VetResult = this.centroideHexagono(count1, count2);
            VetResult[0] = 0;
            momento = (Math.PI * Math.pow(count1, 4)) / 64;
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);
        }

        ///////////////////////////////////////////////////////
        if (this.props.id1 == 1) {
            FlagFig1 = 1;
            VetResult1 = this.CentroideTriangulo(input1A, input1B);

            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
            momento1 = (input1A * Math.pow(input1B, 3)) / 36;
        } else if (this.props.id1 == 2) {
            FlagFig1 = 1;
            VetResult1 = this.CentroideQuadrado(input1A, input1B);
            momento1 = (Math.pow(input1A, 4)) / 12;
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
        } else if (this.props.id1 == 3) {
            FlagFig1 = 1;
            VetResult1 = this.CentroideCirculo(input1A, input1B);
            momento1 = (Math.PI * Math.pow(input1A, 4)) / 64;
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
        } else if (this.props.id1 == 4) {
            VetResult = this.CentroideTrapezio(count1, count2, count3);
            let b = this.RetornoBaseMenorTrapezio(count1, count2, count3);//POssivel erro nos count
            momento = (Math.pow(count3, 3) * (Math.pow(count1, 2) + (4 * count1 * b) + Math.pow(count1, 2))) / (36 * (count1 + b));
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
        } else if (this.props.id1 == 5) {
            FlagFig1 = 1;
            VetResult1 = this.centroideHexagono(input1A, input1B);
            momento1 = (Math.PI * Math.pow(input1A, 4)) / 64;
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
        }
        ////////////////////////////////////////////////////////
        if (this.props.id2 == 1) {
            FlagFig2 = 1;
            VetResult2 = this.CentroideTriangulo(input2A, input2B)
            momento2 = (input2A * Math.pow(input2B, 3)) / 36;
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        } else if (this.props.id2 == 2) {
            FlagFig2 = 1;
            VetResult2 = this.CentroideQuadrado(input2A, input2B);
            momento2 = (Math.pow(input2A, 4)) / 12;
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        } else if (this.props.id2 == 3) {
            FlagFig2 = 1;
            VetResult2 = this.CentroideCirculo(input2A, input2B);
            momento2 = (Math.PI * Math.pow(input2A, 4)) / 64;
        } else if (this.props.id2 == 4) {
            VetResult = this.CentroideTrapezio(count1, count2, count3);
            let b = this.RetornoBaseMenorTrapezio(count1, count2, count3);//POssivel erro nos count
            momento = (Math.pow(count3, 3) * (Math.pow(count1, 2) + (4 * count1 * b) + Math.pow(count1, 2))) / (36 * (count1 + b));
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        } else if (this.props.id2 == 5) {
            FlagFig2 = 1;
            VetResult2 = this.centroideHexagono(input2A, input2B);
            momento2 = (Math.PI * Math.pow(input2A, 4)) / 64;
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        }
        ////////////////////////////////////////////////////////
        if (this.props.id3 == 1) { //triangulo
            FlagFig3 = 1;
            VetResult3 = this.CentroideTriangulo(input3A, input3B)
            momento3 = (input3A * Math.pow(input3B, 3)) / 36;
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        } else if (this.props.id3 == 2) {//quadrado
            FlagFig3 = 1;
            VetResult3 = this.CentroideQuadrado(input3A, input3B);
            momento3 = (Math.pow(input3A, 4)) / 12;
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        } else if (this.props.id3 == 3) { //circulo
            FlagFig3 = 1;
            VetResult3 = this.CentroideCirculo(input3A, input3B);
            momento3 = (Math.PI * Math.pow(input3A, 4)) / 64;
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        } else if (this.props.id3 == 4) { //trapezio
            VetResult = this.CentroideTrapezio(count1, count2, count3);
            let b = this.RetornoBaseMenorTrapezio(count1, count2, count3);//POssivel erro nos count
            momento = (Math.pow(count3, 3) * (Math.pow(count1, 2) + (4 * count1 * b) + Math.pow(count1, 2))) / (36 * (count1 + b));
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        } else if (this.props.id3 == 5) { //hexagono
            FlagFig3 = 1;
            VetResult3 = this.centroideHexagono(input3A, input3B);
            momento3 = (Math.PI * Math.pow(input3A, 4)) / 64;
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        }
        ////////////////////////////////////////////////////////
        let SomaXi, SomaYi, SomaAreaXi, SomaAreaYi;
        let Xi = 0, Yi = VetResult[1], AreaXi = 0, AreaYi = 0;
        let Xi1 = 0, Yi1 = 0, AreaXi1 = 0, AreaYi1 = 0;
        let Xi2 = 0, Yi2 = 0, AreaXi2 = 0, AreaYi2 = 0;
        let Xi3 = 0, Yi3 = 0, AreaXi3 = 0, AreaYi3 = 0;

        AreaYi = AreaFig * Yi;

        if (FlagFig1 == 1) {//figura adicionada em cima
            Yi1 = VetResult[3] + VetResult1[1];//altura da figura principa + centroid da figura de cima // VetResult[Xi,Yi,TamX,TamY]

            AreaXi1 = Xi1 * AreaFig1;
            AreaYi1 = Yi1 * AreaFig1;

        }
        if (FlagFig2 == 1) { //figura adiciona na esquerda
            Yi2 = VetResult2[1];
            Xi2 = -(VetResult[2] / 2) - VetResult2[0];

            AreaXi2 = Xi2 * AreaFig2;
            AreaYi2 = Yi2 * AreaFig2;

        }
        if (FlagFig3 == 1) { //figura adiciona na direita VetResult[Xi,Yi,TamX,TamY]
            Yi3 = VetResult3[1];
            Xi3 = AuxFig3 = (VetResult[2] / 2) + VetResult3[0];
            AreaXi3 = Xi3 * AreaFig3;
            AreaYi3 = Yi3 * AreaFig3;
        }

        ////////////////////////////////////////////////////////
        Xresult = this.CGX((AreaXi + AreaXi1 + AreaXi2 + AreaXi3), (AreaFig + AreaFig1 + AreaFig2 + AreaFig3));
        Yresult = this.CGY((AreaYi + AreaYi1 + AreaYi2 + AreaYi3), (AreaFig + AreaFig1 + AreaFig2 + AreaFig3));

        //Calculo do Novo momento de inercia
        //vai precisar buscar o moemento das figuras; a distancia do CG  de cada figura com a o no GC geral; e precisaremos da area de cada figura
        //Xi Yi, Xi1 Yi2...Momento, Momento1,...AreaFig,Arefig1,...
        let Distancia, Distancia1, Distancia2, Distancia3;
        let MomentoI, MomentoI1, MomentoI2, MomentoI3;
        MomentoI = MomentoI1 = MomentoI2 = MomentoI3 = 0;

        Distancia = this.CalcDist(Xi, Yi, Xresult, Yresult);
        MomentoI = this.CalcMoment(momento, AreaFig, Distancia);

        if (FlagFig1 != 0) {
            Distancia1 = this.CalcDist(Xi1, Yi1, Xresult, Yresult);
            MomentoI1 = this.CalcMoment(momento1, AreaFig1, Distancia1);

        }
        if (FlagFig2 != 0) {
            Distancia2 = this.CalcDist(Xi2, Yi2, Xresult, Yresult);
            MomentoI2 = this.CalcMoment(momento2, AreaFig2, Distancia2);

        }
        if (FlagFig3 != 0) {
            Distancia3 = this.CalcDist(Xi3, Yi3, Xresult, Yresult);
            MomentoI3 = this.CalcMoment(momento3, AreaFig3, Distancia3);
        }

        MomentoResult = MomentoI + MomentoI1 + MomentoI2 + MomentoI3;

        this.setarResultado((Xresult + centerX), (Yresult + centerY), MomentoResult);

        this.verificacaoAntiLoop(this.state.flag);
        return (
            <View>
            </View>
        )
    }
}
const mapState = state => ({
    estadoInputCount1: state.count1,
    estadoInputCount2: state.count2,
    estadoInputCount3: state.count3,
    estadoInputCount4: state.count4,
    valor: state.valoresModal,
    inputTextRedux1A: state.inputTextRedux1A,
    inputTextRedux1B: state.inputTextRedux1B,
    inputTextRedux1C: state.inputTextRedux1C,
    inputTextRedux1D: state.inputTextRedux1D,
    inputTextRedux2A: state.inputTextRedux2A,
    inputTextRedux2B: state.inputTextRedux2B,
    inputTextRedux2C: state.inputTextRedux2C,
    inputTextRedux2D: state.inputTextRedux2D,
    inputTextRedux3A: state.inputTextRedux3A,
    inputTextRedux3B: state.inputTextRedux3B,
    inputTextRedux3C: state.inputTextRedux3C,
    inputTextRedux3D: state.inputTextRedux3D,
});

export default connect(mapState)(Calculo);