import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Response from './components/Response';
//import './styles.css'

export default function App() {
  const [userinput, setInput] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [title, setTitle ] = useState('How are you feeling right now in a scale of 1-5')

  function handleAddTask(){
    Keyboard.dismiss();
    if (userinput == "0"){
      var final = 'https://www.verywellmind.com This website offers tons of resources to help you with anything you need. There are categories such as “Mental Health A-Z” as well as “Self Improvement” “Mental Health A-Z” can help people with addiction, ADHD, Bipolar Disorder and depression. They also have “Race and Identity” and “PTSD.” Feel free to visit this site and look at the cool and informative resources that they offer and share it with your friends.'
    }
    else if (userinput == "1") {
      var final = 'You are managing your stress well! That is great! Here are some tips to do even better/continue doing better: Try to get enough sleep. Sleep affects your health in a lot of ways, so getting a sufficient amount of sleep will reduce stress and improve your mood!Try to stay in touch with your family and friends. Keeping in touch with the important people in your life will help you maintain a sense of hope.Continue to do things you enjoy such as hobbiesContinue using the strategies you have been using to manage your stress Visit this website for more ideas on how to manage your stress: https://www.webmd.com/balance/guide/tips-to-control-stress '
      
    }
    else if (userinput == "2"){
      var final = "Hey, your doing a great job so far considering the situation your in! But we all have bad days so here are somethings that can help you if these days pop up."
    }

    else if (userinput == "3"){
      var final = 'Great job on managing your stress! To manage even more stress, here are some tips: (Resource: https: www.helpguide.org/articles/stress/stress-management.htm)Start a stress journal for a week! Keep track of things that make you stressed. When the week is over, identify the patterns that make you stressed and figure out how to avoid them.Get any kind of movement! Dancing, going outside with your dog, and vacuuming the house are all great choices. Don’t force yourself to do a workout if you’re not feeling it. Instead, do small activities that get you moving!'
    }

    else if (userinput == "4"){
      var final = '"you are unable to manage average amounts of stress, but dont worry here are some activities and strategies that might help you gradually feel less stressed out" Exercising Going for a walk Lighting a candle Listening to music Deep breathing exercises “If you feel as though these few strategies are not helping you please refer to sources like these to help find new activities that suit you.”https://www.healthline.com/nutrition/16-ways-relieve-stress-anxiety#The-bottom-line https://www.colorado.edu/law/25-quick-ways-reduce-stress'
    }

    else if (userinput == "5"){
      var final = 'It seems you are not able to manage stress very well, and that’s fine. Recognition and bringing awareness is the first step in managing your own stress.The first step would be to classify the type of your stress, and working on your mindfulness, then you would eliminate the triggers of stress, both these resources are examples to help:(insert stress questionnaire resource)(Resource: https://www.webmd.com/balance/guide/tips-to-control-stress). Here are some more tips or relieving your stress:Keep a stress journal to note of when you become the most stressedMaintain better care for your physical health - make sure you are STILL WORKING ON TRIMMING AND RESEARCH'
    }

    else {
      var final = "Please enter a number between 0 and 5 only. \n 0 - Fully able to manage stress 1 - Able to manage larger amounts of stress \n 2 - Able to manage more than average amount of stress \n 3 - Neutral (Able to manage average amount of stress) \n 4 - Unable to manage average amount of stress \n 5 - Not able to manage stress "
    }
    setTaskItems([...taskItems, final])
    setInput(null);
  }



  

  function completeTask(index){
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Response text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Enter number from 0-5'} value={userinput} onChangeText={text => setInput(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
