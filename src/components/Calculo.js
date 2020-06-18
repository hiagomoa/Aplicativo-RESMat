import React from 'react';
import { View, Modal, Text } from 'react-native';
import { connect } from 'react-redux';

class Calculo extends React.Component {
    state = {
        resultadoCentroidX: ' ',
        resultadoCentroidY: ' ',
        resultadoMomentoX: 0,
        resultadoMomentoY: 0,
        flag: 0,
        flag1: 0
    }

    //Calcula o momento base das formas sem o deslocamento para cima do novo centroide
    CalcMomentoBase = (fig, argu1, argu2, argu3) => {
        let Ix, Iy;
        Ix = Iy = 0;
        switch (fig) {
            //triangulo
            case 1:
                console.log("Base " + argu1 + "altura " + argu2);
                Ix = (argu1 * Math.pow(argu2, 3)) / 36;
                Iy = (Math.pow(argu1, 3) * argu2) / 36;
                break;
            //quadrado
            case 2:
                Ix = Math.pow(argu1, 4) / 12;
                Iy = Ix;
                break;
            //circulo
            case 3:
                Ix = (Math.pow(argu1, 4) * Math.PI) / 64;
                Iy = Ix;
                break;
            //trapezio
            case 4:
                Ix = 0;
                Iy = 0;
                break;
            //hexagono
            case 5:
                Ix = 0.5413 * Math.pow(argu1, 4);
                Iy = Ix;
                break;
        }
        return [Ix, Iy];
    }



    setarResultado = (resCentX, resCentY, resMomentX, resMomentY, valor) => {

        if (valor === 0) {
            if (resCentX != this.state.resultadoCentroidX || resCentY != this.state.resultadoCentroidY || resMomentX != this.state.resultadoMomentoX || resMomentY != this.state.resultadoMomentoY) {
                this.setState({ resultadoCentroidX: resCentX })
                this.setState({ resultadoCentroidY: resCentY })
                this.setState({ resultadoMomentoX: resMomentX })
                this.setState({ resultadoMomentoY: resMomentY })
                this.setState({ flag: 1 })
                this.setState({ flag1: 1 })
            }
        }
    }

    verificacaoAntiLoop = valor => {
        if (valor === 1) {
            this.props.funcao(1);
            this.props.funcao2(this.state.resultadoCentroidX, this.state.resultadoCentroidY, this.state.resultadoMomentoX, this.state.resultadoMomentoY);
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


    //Calcula o centroide do trapezio
    CentroideTrapezio = (B, b, h) => {
        console.log("BASE MAIOR =  " + B);
        console.log("BASE MEENOR =  " + b);
        console.log("ALTURA =  " + h);
        let tam = B - b;
        tam = tam / 2;//base triangulo
        let At = (tam * h) / 2;
        let Aq = b * h;
        let Yi = h / 3;//centroide triangulo
        let Xg = 0;
        let Yg = ((At * Yi) + (At * Yi) + (Aq * (h / 2))) / ((At * 2) + Aq);

        return [Xg, Yg, B, h];// VetResult[Xi,Yi,TamX,TamY]*/
    }




    //Calcula o valor da base menor do trapezio
    RetornoBaseMenorTrapezio = (b, ang, h) => {
        let rad = (ang * Math.PI) / 180; //ang em radianos
        let tam = h / Math.tan(rad);
        return b - (2 * tam);
    }



    //Calcula o centroide do hexagono
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
            //triangulo
            case 1:
                area = (c1 * c2) / 2;
                break;
            //quadrado 
            case 2:
                area = (Math.pow(c1, 2));
                break;
            //circulo
            case 3:
                area = (Math.PI * (Math.pow((c1 / 2), 2)));
                break;
            //trapezio
            case 4://c1 base maior, c2 base menor, c4 altura
                area = ((c1 + c2) * c4) / 2;
                break;
            //hexagono
            case 5:
                area = (3 * Math.sqrt(3) * (Math.pow(c1, 2))) / 2;
                break;
        }
        return area;
    }

    CalculoMomentoTrapezio = (arg1, arg2, arg3) => { //Base Maior, altura, base menor(ang)
        let aux;
        let basemenor = arg3;
        let basetr = (arg1 - basemenor) / 2;
        let Ixt, Iyt, Ixr, Iyr, Centroid;
        Ixt = (basetr * Math.pow(arg2, 3)) / 36;
        Iyt = (Math.pow(basetr, 3) * arg2) / 36;


        Iyr = Ixr = Math.pow(arg3, 4) / 12;
        console.log("arg1 =  " + arg1);
        console.log("arg3 =  " + arg2);
        console.log("ar2 =  " + arg3);
        Centroid = this.CentroideTrapezio(arg1, arg3, arg2);

        let At, Aq;
        At = (basetr * arg2) / 2;
        Aq = basemenor * arg2;

        let Ctx, Cty, Crx, Cry;//centroid triangulo ,centroid retangulo
        Ctx = basetr / 2;
        Cty = arg2 / 3;

        Crx = 0;
        Cry = arg2 / 2;

        let momentoT = this.CalcMomentoBase(1, basetr, arg2, null);
        let momentoRx, momentoRy;
        momentoRx = (arg3 * Math.pow(arg2, 3)) / 12;
        momentoRy = (arg2 * Math.pow(arg3, 3)) / 12;

        let momentoTTx, momentoTTy;
        momentoTTx = momentoT[0] + At * Math.pow((Cty - Centroid[1]), 2);
        momentoTTy = momentoT[1] + At * Math.pow(((Ctx+(arg3/2)) - Centroid[0]), 2);
        console.log("TESTE MOMENTO"+momentoT[1]+" area triangulo "+ At);
        let momentoTRx, momentoTRy;

        momentoTRx = momentoRx + Aq * (Math.pow((Cry - Centroid[1]), 2));
        momentoTRy = momentoRy + Aq * (Math.pow((Crx - Centroid[0]), 2));
        console.log("momentos TESTE ------  "+ momentoTTx + ' ' + momentoTRx + ' ' + momentoTTy + ' ' + momentoTRy);
        return [((2*momentoTTx) + momentoTRx), ((2*momentoTTy) + momentoTRy)];
    }

    //calculo final do centro de gravidade X
    CGX = (somAiXi, somAi) => {
        return (somAiXi / somAi);
    }
    //calculo final do centro de gravidade Y
    CGY = (somAiYi, somAi) => {
        return (somAiYi / somAi);
    }

    //Calculo da distancia nao vai mais existir ?
    CalcDist = (Xi, Yi, Xt, Yt) => {
        //Xi e Yi sao da imagem
        //Xt e Yt sao do novo CG
        return [(Xi - Xt), (Yi - Yt)];
    }

    CalcMoment = (Mix, Miy, Ai, DisX, DisY) => {
        let Xnm, Ynm;
        Xnm = (Mix + (Ai * Math.pow(DisX, 2)));
        Ynm = (Miy + (Ai * Math.pow(DisY, 2)));
        return [Xnm, Ynm];
    }

    render() {

        if (this.props.valor[0] == 'Object') {
            console.log("Valor eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + this.props.valor[0].CenterX + ' ' + this.props.valor[0].CenterY);

        }
        let count1 = 100, count2 = 200, count3 = 200, count4 = 200;
        let input1A = 0, input1B = 0, input1C = 0, input1D = 0;
        let input2A = 0, input2B = 0, input2C = 0, input2D = 0;
        let input3A = 0, input3B = 0, input3C = 0, input3D = 0;
        let x, y, x1, y1, x2, y2, x3, y3, momento = 0, momento1 = 0, momento2 = 0, momento3 = 0;
        let Xresult, Yresult, MomentoResultX, MomentoResultY;
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

        if (typeof this.props.valor[0] != "undefined") {
            centerX = parseInt(InputRedux.CenterX);
            centerY = parseInt(InputRedux.CenterY);
            console.log("CALCULO CENTROIDE TESTE __" + this.props.valor[0]);
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
            momento = this.CalcMomentoBase(1, count1, count2, count3);
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);

        } else if (this.props.id == 2) {
            VetResult = this.CentroideQuadrado(count1, count2);
            VetResult[0] = 0;
            momento = this.CalcMomentoBase(2, count1, count2, count3);

            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);
        } else if (this.props.id == 3) {
            VetResult = this.CentroideCirculo(count1, count2);
            VetResult[0] = 0;
            momento = this.CalcMomentoBase(3, count1, count2, count3);
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);
        } else if (this.props.id == 4) {

            VetResult = this.CentroideTrapezio(count1, count2, count4);
            VetResult[0] = 0;
            momento = this.CalculoMomentoTrapezio(count1, count4, count2);
            let b = this.RetornoBaseMenorTrapezio(count1, count4, count2);
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);

        } else if (this.props.id == 5) {
            VetResult = this.centroideHexagono(count1, count2);
            VetResult[0] = 0;
            momento = this.CalcMomentoBase(5, count1, count2, count3);
            AreaFig = this.Areas(parseInt(this.props.id), count1, count2, count3, count4);
        }

        ///////////////////////////////////////////////////////
        if (this.props.id1 == 1) {
            FlagFig1 = 1;
            VetResult1 = this.CentroideTriangulo(input1A, input1B);
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
            momento1 = this.CalcMomentoBase(1, input1A, input1B, input1C);
        } else if (this.props.id1 == 2) {
            FlagFig1 = 1;
            VetResult1 = this.CentroideQuadrado(input1A, input1B);
            momento1 = this.CalcMomentoBase(2, input1A, input1B, input1C);
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
        } else if (this.props.id1 == 3) {
            FlagFig1 = 1;
            VetResult1 = this.CentroideCirculo(input1A, input1B);
            momento1 = this.CalcMomentoBase(3, input1A, input1B, input1C);
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
        } else if (this.props.id1 == 4) {
            FlagFig1=1;
            VetResult1 = this.CentroideTrapezio(input1A, input1B, input1D);
            momento1 = this.CalculoMomentoTrapezio(input1A, input1D, input1B);
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
        } else if (this.props.id1 == 5) {
            FlagFig1 = 1;
            VetResult1 = this.centroideHexagono(input1A, input1B);
            momento1 = this.CalcMomentoBase(5, input1A, input1B, input1C);
            AreaFig1 = this.Areas(parseInt(this.props.id1), input1A, input1B, input1C, input1D);
        }
        ////////////////////////////////////////////////////////
        if (this.props.id2 == 1) {
            FlagFig2 = 1;
            VetResult2 = this.CentroideTriangulo(input2A, input2B)
            momento2 = this.CalcMomentoBase(1, input2A, input2B, input2C);
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        } else if (this.props.id2 == 2) {
            FlagFig2 = 1;
            VetResult2 = this.CentroideQuadrado(input2A, input2B);
            momento2 = this.CalcMomentoBase(2, input2A, input2B, input2C);
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        } else if (this.props.id2 == 3) {
            FlagFig2 = 1;
            VetResult2 = this.CentroideCirculo(input2A, input2B);
            momento2 = this.CalcMomentoBase(3, input2A, input2B, input2C);
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        } else if (this.props.id2 == 4) {
            FlagFig2=1;
            VetResult2 = this.CentroideTrapezio(input2A, input2B, input2D);
            momento2 = this.CalculoMomentoTrapezio(input2A, input2D, input2B);
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        } else if (this.props.id2 == 5) {
            FlagFig2 = 1;
            VetResult2 = this.centroideHexagono(input2A, input2B);
            momento2 = this.CalcMomentoBase(5, input2A, input2B, input2C);
            AreaFig2 = this.Areas(parseInt(this.props.id2), input2A, input2B, input2C, input2D);
        }
        ////////////////////////////////////////////////////////
        if (this.props.id3 == 1) { //triangulo
            FlagFig3 = 1;
            VetResult3 = this.CentroideTriangulo(input3A, input3B)
            momento3 = this.CalcMomentoBase(1, input3A, input3B, input3C);
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        } else if (this.props.id3 == 2) {//quadrado
            FlagFig3 = 1;
            VetResult3 = this.CentroideQuadrado(input3A, input3B);
            momento3 = this.CalcMomentoBase(2, input3A, input3B, input3C);
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        } else if (this.props.id3 == 3) { //circulo
            FlagFig3 = 1;
            VetResult3 = this.CentroideCirculo(input3A, input3B);
            momento3 = this.CalcMomentoBase(3, input3A, input3B, input3C);
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        } else if (this.props.id3 == 4) { //trapezio
            FlagFig3=1;
            VetResult3 = this.CentroideTrapezio(input3A, input3B, input3D);
            momento3 = this.CalculoMomentoTrapezio(input3A, input3D, input3B);
            AreaFig3 = this.Areas(parseInt(this.props.id3), input3A, input3B, input3C, input3D);
        } else if (this.props.id3 == 5) { //hexagono
            FlagFig3 = 1;
            VetResult3 = this.centroideHexagono(input3A, input3B);
            momento3 = this.CalcMomentoBase(5, input3A, input3B, input3C);
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
        console.log("centroid figura total"+Xresult+" "+Yresult);
        if (centerX != 0 || centerY != 0) {
            Xresult = centerX;
            Yresult = centerY;
        }
        //Calculo do Novo momento de inercia
        //vai precisar buscar o moemento das figuras; a distancia do CG  de cada figura com a o no GC geral; e precisaremos da area de cada figura
        //Xi Yi, Xi1 Yi2...Momento, Momento1,...AreaFig,Arefig1,...
        let Distancia = 0, Distancia1 = 0, Distancia2 = 0, Distancia3 = 0;
        let MomentoI = [0, 0], MomentoI1 = [0, 0], MomentoI2 = [0, 0], MomentoI3 = [0, 0];



        Distancia = this.CalcDist(Xi, Yi, Xresult, Yresult);

        console.log("INDIVIDUAL----- M " + momento[0] + " M1 " + momento1[0] + " M2 " + momento2[0] + " M3 " + momento3[0]);
        console.log("INDIVIDUAL----- M " + momento[1] + " M1 " + momento1[1] + " M2 " + momento2[1] + " M3 " + momento3[1]);

        MomentoI = this.CalcMoment(momento[0], momento[1], AreaFig, Distancia[1], Distancia[0]);
        console.log("Mmento principal " + MomentoI);

        if (FlagFig1 != 0) {
            Distancia1 = this.CalcDist(Xi1, Yi1, Xresult, Yresult);
            MomentoI1 = this.CalcMoment(momento1[0], momento1[1], AreaFig1, Distancia1[1], Distancia1[0]);
            console.log("Mmento figura cima " + MomentoI1);
        }
        if (FlagFig2 != 0) {
            Distancia2 = this.CalcDist(Xi2, Yi2, Xresult, Yresult);
            MomentoI2 = this.CalcMoment(momento2[0], momento2[1], AreaFig2, Distancia2[1], Distancia2[0]);
            console.log("Mmento figura esquerda " + MomentoI2);
        }
        if (FlagFig3 != 0) {
            Distancia3 = this.CalcDist(Xi3, Yi3, Xresult, Yresult);
            MomentoI3 = this.CalcMoment(momento3[0], momento3[1], AreaFig3, Distancia3[1], Distancia3[0]);
            console.log("Mmento figura direita " + MomentoI3);
        }
        console.log("M " + MomentoI[0] + " M1 " + MomentoI1[0] + " M2 " + MomentoI2[0] + " M3 " + MomentoI3[0]);
        console.log("M " + MomentoI[1] + " M1 " + MomentoI1[1] + " M2 " + MomentoI2[1] + " M3 " + MomentoI3[1]);

        MomentoResultX = MomentoI[0] + MomentoI1[0] + MomentoI2[0] + MomentoI3[0];
        MomentoResultY = MomentoI[1] + MomentoI1[1] + MomentoI2[1] + MomentoI3[1];

        console.log("Momento:" + MomentoResultX + " " + MomentoResultY);

        console.log("Centroid:" + Xresult + " " + Yresult);
        this.setarResultado(Xresult, Yresult, MomentoResultX, MomentoResultY, this.state.flag1);
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