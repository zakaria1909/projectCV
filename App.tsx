import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';


const App = () => {
  const personalInfo = {
    name: 'Zakaria Ahmada',
    title: 'Mahasiswa',
    email: 'zakariaahmada19@gmail.com',
    phone: '+62 838-2673-5849',
    location: 'Jepara, Jawa Tengah',
    summary: 'Mahasiswa Politeknik Balekambang jurusan Rekayasa Perangkat Lunak semester 6 yang antusias dalam pengembangan aplikasi mobile. Bercita cita menjadi mobile developer.',
  };

  const experience = [
    {
      position: 'Freelance Web Developer',
      company: 'Project Pribadi',
      period: '2024 - Sekarang',
      description: 'Membuat website sederhana untuk UMKM lokal menggunakan PHP Native dan Laravel',
    },
    {
      position: 'Admin Catering',
      company: 'Catering Ahza',
      period: '2025 - Sekarang',
      description: 'Memegang website dan mengelola media sosial sekaligus karyawan Catering Ahza.',
    },
  ];

  const education = [
    {
      degree: 'D4 Rekayasa Perangkat Lunak',
      school: 'Politeknik Balekambang',
      period: '2022 - Sekarang',
      gpa: 'IPK: 3.64',
    },
    {
      degree: 'TKJ (Teknologi Informasi dan Jaringan)',
      school: 'SMK Walisongo Pecangaan',
      period: '2019 - 2022',
    },
  ];

  const skills = [
    'React Native',
    'JavaScript',
    'Java',
    'HTML/CSS',
    'MySQL',
    'Figma',
    'PHP',
  ];

  const projects = [
    {
      title: 'Aplikasi Hadist',
      tech: 'Java',
      description: 'Aplikasi mobile android untuk mengelola hadist dengan fitur CRUD',
    },
    {
      title: 'Website Catering Ahza',
      tech: 'Laravel, PHP, MySQL, HTML, CSS, JavaScript',
      description: 'Website untuk Catering Ahza yang menampilkan menu dan informasi kontak',
    },
  ];

  const renderSection = (title: string, content: React.ReactNode) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {content}
    </View>
  );

  const renderProfileImage = () => {
    return (
      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/saya.jpg')}
          style={styles.profileImage}
          onError={(error) => {
            console.log('Image load error:', error.nativeEvent.error);
          }}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.header}>
          <Image
            source={require('./assets/saya.jpg')}
            style={styles.profileImage}
            resizeMode="cover"
            onError={() => console.log('Gagal memuat gambar')}
          />

          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.contactItem}>📧 {personalInfo.email}</Text>
          <Text style={styles.contactItem}>📱 {personalInfo.phone}</Text>
          <Text style={styles.contactItem}>📍 {personalInfo.location}</Text>
        </View>

        {renderSection('Tentang Saya', (
          <Text style={styles.summaryText}>{personalInfo.summary}</Text>
        ))}

        {renderSection('Pengalaman Kerja', (
          <View>
            {experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={styles.experiencePosition}>{exp.position}</Text>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
                <Text style={styles.experiencePeriod}>{exp.period}</Text>
                <Text style={styles.experienceDescription}>{exp.description}</Text>
              </View>
            ))}
          </View>
        ))}

        {renderSection('Pendidikan', (
          <View>
            {education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.educationSchool}>{edu.school}</Text>
                <Text style={styles.educationPeriod}>{edu.period}</Text>
                {edu.gpa && <Text style={styles.educationGpa}>{edu.gpa}</Text>}
              </View>
            ))}
          </View>
        ))}

        {renderSection('Proyek', (
          <View>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectTech}>{project.tech}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
              </View>
            ))}
          </View>
        ))}

        {renderSection('Keterampilan', (
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillChip}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  profileContainer: {
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
  },
  contactContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  section: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    paddingBottom: 5,
  },
  summaryText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  experienceItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  experiencePosition: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  experienceCompany: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '600',
    marginBottom: 2,
  },
  experiencePeriod: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  experienceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  educationItem: {
    marginBottom: 15,
  },
  educationDegree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  educationSchool: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '600',
    marginBottom: 2,
  },
  educationPeriod: {
    fontSize: 14,
    color: '#888',
  },
  educationGpa: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
    marginTop: 2,
  },
  projectItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  projectTech: {
    fontSize: 14,
    color: '#FF9800',
    fontWeight: '600',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillChip: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    fontSize: 14,
    color: '#1976d2',
    fontWeight: '600',
  },
});

export default App;