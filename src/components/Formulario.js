import {
  View,
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const Formulario = ({
  modalVisible,
  setModalVisible,
  pacientes,
  setPacientes,
}) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  const handleCita = () => {
    if ([paciente, propietario, email, fecha, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    const nuevoPaciente = {
      id:Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas,
    };
    setPacientes([...pacientes, nuevoPaciente]);
    setModalVisible(false);
    setPaciente('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFecha(new Date());
    setSintomas('');
  };
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => setModalVisible(false)}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre paciente</Text>
          </View>
          <TextInput
            keyboardType="default"
            placeholder="Nombre del paciente"
            placeholderTextColor={'#666'}
            style={styles.input}
            value={paciente}
            onChangeText={setPaciente}
          />
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre propietario</Text>
          </View>
          <TextInput
            keyboardType="default"
            placeholder="Nombre del propietario"
            placeholderTextColor={'#666'}
            style={styles.input}
            value={propietario}
            onChangeText={setPropietario}
          />
          <View style={styles.campo}>
            <Text style={styles.label}>e-mail</Text>
          </View>
          <TextInput
            keyboardType="email-address"
            placeholder="e-mail"
            placeholderTextColor={'#666'}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono propietario</Text>
          </View>
          <TextInput
            keyboardType="numeric"
            placeholder="Teléfono propietario"
            placeholderTextColor={'#666'}
            style={styles.input}
            value={telefono}
            onChangeText={setTelefono}
          />

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha alta</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fecha}
                locale="es"
                onDateChange={date => setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
          </View>
          <TextInput
            keyboardType="default"
            placeholder="Sintomas"
            placeholderTextColor={'#666'}
            style={[styles.input, styles.sintomasInput]}
            value={sintomas}
            onChangeText={setSintomas}
            multiline={true}
            numberOfLines={4}
          />
          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  contenido: {backgroundColor: '#6d28d9', flex: 1},
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
    marginBottom: 30,
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo: {
    marginHorizontal: 15,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sintomasInput: {
    height: 100,
  },
  fechaContenedor: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  btnCancelar: {
    marginTop: 20,
    backgroundColor: '#5827a4',
    marginHorizontal: 20,
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  btnNuevaCita: {
    backgroundColor: '#f59e0e',
    marginVertical: 50,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827a4',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 16,
  },
});
export default Formulario;
