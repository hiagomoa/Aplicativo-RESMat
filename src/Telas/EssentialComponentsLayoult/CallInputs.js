import React from 'react';
import { View } from 'react-native';
import InputText1 from './InputText1';
import InputText2 from './InputText2';
import InputText3 from './InputText3';


export default class CallInputs extends React.Component {

    render() {
        return (
            <View style={{ paddingTop: 5 }}>
                {this.props.idescolha === '1' &&
                    <View>
                        {this.props.param == 1 &&
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <InputText1 count={1} texto='X' id={this.props.id}></InputText1>
                                    <InputText1 count={2} texto='Y' id={this.props.id}></InputText1>
                                </View>
                            </View>
                        }
                    </View>
                }
                {this.props.idescolha === '1' &&
                    <View>
                        {this.props.param == 2 &&
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <InputText2 count={1} texto='X' id={this.props.id}></InputText2>
                                    <InputText2 count={2} texto='Y' id={this.props.id}></InputText2>
                                </View>
                            </View>
                        }
                    </View>
                }
                {this.props.idescolha === '1' &&
                    <View>
                        {this.props.param == 3 &&
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <InputText3 count={1} texto='X' id={this.props.id}></InputText3>
                                    <InputText3 count={2} texto='Y' id={this.props.id}></InputText3>
                                </View>
                            </View>
                        }
                    </View>
                }

                {(this.props.idescolha === '2' || this.props.idescolha === '3' || this.props.idescolha === '5') &&
                    <View>
                        {this.props.param == 1 &&
                            <View style={{ flexDirection: 'column', alignItens: 'center' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <InputText1 count={1} texto='D'></InputText1>
                                </View>
                            </View>
                        }
                    </View>
                }

                {(this.props.idescolha === '2' || this.props.idescolha === '3' || this.props.idescolha === '5') &&
                    <View>
                        {this.props.param == 2 &&
                            <View style={{ flexDirection: 'column', alignItens: 'center' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <InputText2 count={1} texto='D'></InputText2>
                                </View>
                            </View>
                        }
                    </View>
                }

                {(this.props.idescolha === '2' || this.props.idescolha === '3' || this.props.idescolha === '5') &&
                    <View>
                        {this.props.param == 3 &&
                            <View style={{ flexDirection: 'column', alignItens: 'center' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <InputText3 count={1} texto='D'></InputText3>
                                </View>
                            </View>
                        }
                    </View>
                }

                {this.props.idescolha === '4' &&
                    <View>
                        {this.props.param == 1 &&
                            <View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <InputText1 count={1} texto='B'></InputText1>
                                        <InputText1 count={2} texto='b'></InputText1>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                        <InputText1 count={4} texto='H'></InputText1>
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                }

                {this.props.idescolha === '4' &&
                    <View>
                        {this.props.param == 2 &&
                            <View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <InputText2 count={1} texto='B'></InputText2>
                                        <InputText2 count={2} texto='b'></InputText2>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                        <InputText2 count={4} texto='H'></InputText2>
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                }

                {this.props.idescolha === '4' &&
                    <View>
                        {this.props.param == 3 &&
                            <View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <InputText3 count={1} texto='B'></InputText3>
                                        <InputText3 count={2} texto='b'></InputText3>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                        <InputText3 count={4} texto='H'></InputText3>
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                }
            </View >
        )
    }

}