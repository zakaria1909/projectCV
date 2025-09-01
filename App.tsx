import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

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

  const tabs = [
    { key: 'home', title: '🏠 Home', icon: '🏠' },
    { key: 'profile', title: '👤 Profil', icon: '👤' },
    { key: 'about', title: '📝 Tentang', icon: '📝' },
    { key: 'experience', title: '💼 Pengalaman', icon: '💼' },
    { key: 'education', title: '🎓 Pendidikan', icon: '🎓' },
    { key: 'projects', title: '🚀 Proyek', icon: '🚀' },
    { key: 'skills', title: '⚡ Skill', icon: '⚡' },
  ];

  const socialLinks = {
  whatsapp: 'https://wa.me/6283826735849',
  instagram: 'https://instagram.com/zakariaahmada19',
  github: 'https://github.com/zakariaahmada19',
  linkedin: 'https://linkedin.com/in/zakariaahmada19',
  telegram: 'https://t.me/zakariaahmada19',
};

// bikin tipe key dari objek socialLinks
type SocialPlatform = keyof typeof socialLinks;

const handleSocialPress = (platform: SocialPlatform) => {
  const url = socialLinks[platform];
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open ${platform}`);
      }
    })
    .catch((err) => console.error('An error occurred', err));
};

  const renderSection = (title, content) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {content}
    </View>
  );

  const renderProfileContent = () => (
    <View style={styles.profileContent}>
      <View style={styles.contactContainer}>
        <Text style={styles.contactItem}>📧 {personalInfo.email}</Text>
        <Text style={styles.contactItem}>📱 {personalInfo.phone}</Text>
        <Text style={styles.contactItem}>📍 {personalInfo.location}</Text>
      </View>
    </View>
  );

  const renderAboutContent = () => (
    <View style={styles.section}>
      <Text style={styles.summaryText}>{personalInfo.summary}</Text>
    </View>
  );

  const renderExperienceContent = () => (
    <View style={styles.section}>
      {experience.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <Text style={styles.experiencePosition}>{exp.position}</Text>
          <Text style={styles.experienceCompany}>{exp.company}</Text>
          <Text style={styles.experiencePeriod}>{exp.period}</Text>
          <Text style={styles.experienceDescription}>{exp.description}</Text>
        </View>
      ))}
    </View>
  );

  const renderEducationContent = () => (
    <View style={styles.section}>
      {education.map((edu, index) => (
        <View key={index} style={styles.educationItem}>
          <Text style={styles.educationDegree}>{edu.degree}</Text>
          <Text style={styles.educationSchool}>{edu.school}</Text>
          <Text style={styles.educationPeriod}>{edu.period}</Text>
          {edu.gpa && <Text style={styles.educationGpa}>{edu.gpa}</Text>}
        </View>
      ))}
    </View>
  );

  const renderProjectsContent = () => (
    <View style={styles.section}>
      {projects.map((project, index) => (
        <View key={index} style={styles.projectItem}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectTech}>{project.tech}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
      ))}
    </View>
  );

  const renderSkillsContent = () => (
    <View style={styles.section}>
      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillChip}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderHomeContent = () => (
    <View>
      {renderProfileContent()}
      {renderSection('Tentang Saya', <Text style={styles.summaryText}>{personalInfo.summary}</Text>)}
      {renderSection('Pengalaman Kerja', 
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
      )}
      {renderSection('Pendidikan', 
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
      )}
      {renderSection('Proyek', 
        <View>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectTech}>{project.tech}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
            </View>
          ))}
        </View>
      )}
      {renderSection('Keterampilan', 
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeContent();
      case 'profile':
        return renderProfileContent();
      case 'about':
        return renderAboutContent();
      case 'experience':
        return renderExperienceContent();
      case 'education':
        return renderEducationContent();
      case 'projects':
        return renderProjectsContent();
      case 'skills':
        return renderSkillsContent();
      default:
        return renderHomeContent();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Image
          source={require('./assets/saya.jpg')}
          style={styles.profileImage}
          resizeMode="cover"
          onError={() => console.log('Gagal memuat gambar')}
        />
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.title}</Text>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialPress('whatsapp')}
          >
            <Image 
              source={require('./assets/wa.png')}
              style={styles.socialIcon}
              resizeMode="contain"
              onError={() => console.log('WhatsApp icon not found')}
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialPress('instagram')}
          >
            <Image 
              source={require('./assets/Instagram.png')}
              style={styles.socialIcon}
              resizeMode="contain"
              onError={() => console.log('Instagram icon not found')}
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialPress('github')}
          >
            <Image 
              source={require('./assets/GitHub.png')}
              style={styles.socialIcon}
              resizeMode="contain"
              onError={() => console.log('GitHub icon not found')}
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialPress('linkedin')}
          >
            <Image 
              source={require('./assets/linkedin.png')}
              style={styles.socialIcon}
              resizeMode="contain"
              onError={() => console.log('LinkedIn icon not found')}
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialPress('telegram')}
          >
            <Image 
              source={require('./assets/Telegram.png')}
              style={styles.socialIcon}
              resizeMode="contain"
              onError={() => console.log('Telegram icon not found')}
            />
          </TouchableOpacity>
        </View>
      </View>

      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabScrollView}
        contentContainerStyle={styles.tabContainer}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabItem,
              activeTab === tab.key && styles.activeTabItem
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={styles.tabIcon}>{tab.icon}</Text>
            <Text style={[
              styles.tabText,
              activeTab === tab.key && styles.activeTabText
            ]}>
              {tab.title.replace(/^.+\s/, '')}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      <ScrollView style={styles.contentScrollView}>
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
    position: 'relative',
  },
  socialContainer: {
    position: 'absolute',
    right: 20,
    top: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  socialButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  socialIcon: {
    width: 24,
    height: 24,
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
  tabScrollView: {
    backgroundColor: '#fff',
    maxHeight: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tabContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  activeTabItem: {
    backgroundColor: '#2196F3',
  },
  tabIcon: {
    fontSize: 16,
    marginBottom: 2,
  },
  tabText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  contentScrollView: {
    flex: 1,
  },
  profileContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contactContainer: {
    backgroundColor: '#fff',
    padding: 20,
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