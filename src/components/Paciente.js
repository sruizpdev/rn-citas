import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Paciente = ({item}) => {
  const {paciente, fecha} = item.item;

  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha);
    console.log('esta es la fecha que entra en la funcion: ', nuevaFecha);
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const hora = nuevaFecha.toLocaleTimeString('en-US').toString();
    const dia = nuevaFecha.toLocaleDateString('es-ES', opciones).toString();
    return dia + ' - ' + hora;
  };
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn, styles.btnEditar]}>
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 5,
  },
  texto: {
    color: '#6d28d9',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  fecha: {
    color: '#374151',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {backgroundColor: '#f59e0b'},
  btnEliminar: {backgroundColor: '#ef4444'},
  btnTexto: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
export default Paciente;
