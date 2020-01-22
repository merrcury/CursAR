# CursAR

<div align='center'>
 
![Made with love in India](https://madewithlove.now.sh/in?heart=true&colorA=%23000000&colorB=%230c0361&template=plastic)
![Size](https://img.shields.io/github/repo-size/merrcury/CursAR?style=plastic)
![Issues](https://img.shields.io/github/issues/merrcury/CursAR?style=plastic)
![pull-request](https://img.shields.io/github/issues-pr/merrcury/CursAR?style=plastic)
![license](https://img.shields.io/github/license/merrcury/CursAR?style=plastic)
![release](https://img.shields.io/github/v/release/merrcury/CursAR?include_prereleases&style=plastic)
![website](https://img.shields.io/website?down_color=red&down_message=offline&style=plastic&up_color=green&up_message=online&url=https%3A%2F%2Fteamcursar.firebaseapp.com%2F)

</div>


CursAR is a idea to transform Education & Teaching. CursAR's web platform and APP platform both play integral part in transforming Education. 

## Contents
[About APP](#about-app)
[About Website](#about-website)
[Folder Structure](#folder-structure)
  * [Top Level Directory Layout](#top-level-directory-layout)
  * [Android APP Directory Layout](#android-app-directory-layout)
     * [Assets Folder](#assets-folder)

## About APP
The student generally feels difficulty in visualizing 2-D Images in the textbooks :orange_book: and results in less attached to that subject. In the App :iphone:, we have tried to bridge the gap between that. We let them visualize effectively and efficiently. Student can interact with the AR Diagram by moving book, Dragging Model, Zooming In & Out, & Rotating it.
 
We currently support Android Platform. We are constantly working around the clock to provide an all-around experience. This is a Minimum Viable Product of our initial thoughts. We will increase functionality and features as per feedback.
 
:triangular_flag_on_post: Download App from [Here](http://bit.ly/cursARapp) (Follow the Instructions Given).

:rocket: Minimun Android Version : Android Marshmallow 6.0

:mailbox_with_mail: Give Feedback [Here](http://bit.ly/cursARweb).

## About Website
CursAR is an idea with never ending possiblities. CursAR is always need of resources to reach students in India at low cost. Basic Need of AR App is 3D Models. Hiring Full-Time Designers will boost up the solution cost by almost 1000% which will not accessible by lower section in India. So, CursAR enables a portal where designer from across the world can contribute required 3D models in exchange for recognition and rewards. 

:globe_with_meridians: Visit Website: [CursAR](http://bit.ly/cursARweb)


## Folder Structure

### Top-level directory layout
The Top Level Directory layout is shown below:

    .
    ├── App                  # Unity Android APP
    ├── website              # Website
    ├── Code Of Conduct               
    ├── Contributing                  
    ├── PULL REQUEST TEMPLATE         
    ├── LICENSE
    └── README.md

### Android APP directory layout
Let's Look Inside the APP folder

    .
    ├── Assests               #All Assets Related to APP
    ├── Packages              #Package Details Used in APP
    ├── ProjectSettings       #Project & Package Settings        
    ├── QCAR                  #Vuforia's Folder
    ├── UIElementsSchema      #UI Elements Schema
    └── gitignore

   #### Assets Folder
The structure of Assets Folder is shown below. Most of things are self explanatory but Comments are also added for Explanation. Do Consider Comments of Scence Folder. Scripts are named accordingly to their function and they have commented code too. 

<pre><font color="#5555FF"><b>./Assets</b></font> 
├── <font color="#5555FF"><b>Animation</b></font> #UI Animation Files
│   ├── <font color="#5555FF"><b>MainMenu</b></font>
│   ├── <font color="#5555FF"><b>Panel</b></font>
│   └── <font color="#5555FF"><b>Settings</b></font>
├── <font color="#5555FF"><b>Editor</b></font> #Vuforia Image Target Storage
│   └── <font color="#5555FF"><b>Vuforia</b></font>
│       └── <font color="#5555FF"><b>ImageTargetTextures</b></font>
│           └── <font color="#5555FF"><b>anatomy</b></font>
├── <font color="#5555FF"><b>Editor Default Resources</b></font> 
│   └── <font color="#5555FF"><b>Firebase</b></font>
├── <font color="#5555FF"><b>Firebase</b></font> # Modules Related to Firebase 
│   ├── <font color="#5555FF"><b>Editor</b></font>
│   ├── <font color="#5555FF"><b>m2repository</b></font>
│   │   └── <font color="#5555FF"><b>com</b></font>
│   │       └── <font color="#5555FF"><b>google</b></font>
│   │           └── <font color="#5555FF"><b>firebase</b></font>
│   │               ├── <font color="#5555FF"><b>firebase-analytics-unity</b></font> #User Analytics Module
│   │               │   └── <font color="#5555FF"><b>6.9.0</b></font>
│   │               └── <font color="#5555FF"><b>firebase-app-unity</b></font> #Initializing Module
│   │                   └── <font color="#5555FF"><b>6.9.0</b></font>
│   └── <font color="#5555FF"><b>Plugins</b></font>
│       ├── <font color="#5555FF"><b>iOS</b></font> #iOS Module Location (Future Plans)
│       └── <font color="#5555FF"><b>x86_64</b></font>
├── <font color="#5555FF"><b>Fonts</b></font> # Fonts Used
│   └── <font color="#5555FF"><b>Jupiter</b></font>
├── <font color="#5555FF"><b>Lean</b></font> # Lean Touch Assests
│   ├── <font color="#5555FF"><b>Common</b></font>
│   │   ├── <font color="#5555FF"><b>Examples</b></font>
│   │   │   ├── <font color="#5555FF"><b>Fonts</b></font>
│   │   │   ├── <font color="#5555FF"><b>Materials</b></font>
│   │   │   ├── <font color="#5555FF"><b>Meshes</b></font>
│   │   │   ├── <font color="#5555FF"><b>Prefabs</b></font>
│   │   │   ├── <font color="#5555FF"><b>Scripts</b></font>
│   │   │   ├── <font color="#5555FF"><b>Shaders</b></font>
│   │   │   └── <font color="#5555FF"><b>Textures</b></font>
│   │   └── <font color="#5555FF"><b>Scripts</b></font>
│   └── <font color="#5555FF"><b>Touch</b></font>
│       ├── <font color="#5555FF"><b>Examples</b></font>
│       │   ├── <font color="#5555FF"><b>Materials</b></font>
│       │   ├── <font color="#5555FF"><b>Prefabs</b></font>
│       │   ├── <font color="#5555FF"><b>Scripts</b></font>
│       │   └── <font color="#5555FF"><b>Textures</b></font>
│       └── <font color="#5555FF"><b>Scripts</b></font>
├── <font color="#5555FF"><b>Materials</b></font> # New Materials Folder
├── <font color="#5555FF"><b>Models</b></font> #OBJ Models
│   ├── <font color="#5555FF"><b>heart</b></font>
│   ├── <font color="#5555FF"><b>Human brain</b></font>
│   └── <font color="#5555FF"><b>Skull</b></font>
├── <font color="#5555FF"><b>Parse</b></font>
│   └── <font color="#5555FF"><b>Plugins</b></font>
│       └── <font color="#5555FF"><b>dotNet45</b></font>
├── <font color="#5555FF"><b>PlayServicesResolver</b></font> #Android Specific Library
│   └── <font color="#5555FF"><b>Editor</b></font>
├── <font color="#5555FF"><b>Plugins</b></font> #Plugins
│   ├── <font color="#5555FF"><b>Android</b></font>
│   │   ├── <font color="#5555FF"><b>com.google.firebase.firebase-analytics-unity-6.9.0</b></font>
│   │   │   └── <font color="#5555FF"><b>libs</b></font>
│   │   │       ├── <font color="#5555FF"><b>armeabi-v7a</b></font>
│   │   │       └── <font color="#5555FF"><b>x86</b></font>
│   │   ├── <font color="#5555FF"><b>com.google.firebase.firebase-app-unity-6.9.0</b></font>
│   │   │   └── <font color="#5555FF"><b>libs</b></font>
│   │   │       ├── <font color="#5555FF"><b>armeabi-v7a</b></font>
│   │   │       └── <font color="#5555FF"><b>x86</b></font>
│   │   ├── <font color="#5555FF"><b>com.google.firebase.firebase-common-19.3.0</b></font>
│   │   │   └── <font color="#5555FF"><b>libs</b></font>
│   │   └── <font color="#5555FF"><b>Firebase</b></font>
│   │       └── <font color="#5555FF"><b>res</b></font>
│   │           └── <font color="#5555FF"><b>values</b></font>
│   └── <font color="#5555FF"><b>iOS</b></font>
│       └── <font color="#5555FF"><b>Firebase</b></font>
├── <font color="#5555FF"><b>Prefabs</b></font> #Prefabs Used in Project
├── <font color="#5555FF"><b>Resources</b></font> 
├── <font color="#5555FF"><b>Scenes</b></font> #ALL Scence lies in this folder
|   ├── <font color="#5555FF"><b>About.unity</b></font> # About Section of APP
|   ├── <font color="#5555FF"><b>About.unity.meta</b></font>
|   ├── <font color="#5555FF"><b>Credits.unity</b></font> # Credits Folder of APP
|   ├── <font color="#5555FF"><b>Credits.unity.meta</b></font>
|   ├── <font color="#5555FF"><b>main.unity</b></font> # Main Augumented Reality Scene of APP
|   ├── <font color="#5555FF"><b>main.unity.meta</b></font>
|   ├── <font color="#5555FF"><b>Menu 3D.unity</b></font> # Open Menu of APP
|   └── <font color="#5555FF"><b>Menu 3D.unity.meta</b></font>
├── <font color="#5555FF"><b>Scripts</b></font> #ALL C# Scripts
├── <font color="#5555FF"><b>StreamingAssets</b></font>
│   └── <font color="#5555FF"><b>Vuforia</b></font>
├── <font color="#5555FF"><b>Textures and Sprites</b></font>
│   ├── <font color="#5555FF"><b>Decoration</b></font>
│   ├── <font color="#5555FF"><b>Lit UI</b></font>
│   ├── <font color="#5555FF"><b>Rounded UI</b></font>
│   └── <font color="#5555FF"><b>SF UI</b></font>
│       └── <font color="#5555FF"><b>Background</b></font>
└── <font color="#5555FF"><b>Vuforia</b></font> #Vuforia Assets
    ├── <font color="#5555FF"><b>Databases</b></font>
    │   ├── <font color="#5555FF"><b>Emulator</b></font>
    │   └── <font color="#5555FF"><b>ForPrint</b></font>
    │       └── <font color="#5555FF"><b>Emulator</b></font>
    ├── <font color="#5555FF"><b>Editor</b></font>
    │   └── <font color="#5555FF"><b>Scripts</b></font>
    ├── <font color="#5555FF"><b>Fonts</b></font>
    ├── <font color="#5555FF"><b>Materials</b></font>
    ├── <font color="#5555FF"><b>Prefabs</b></font>
    ├── <font color="#5555FF"><b>Scripts</b></font>
    │   └── <font color="#5555FF"><b>Internal</b></font>
    ├── <font color="#5555FF"><b>Shaders</b></font>
    └── <font color="#5555FF"><b>Textures</b></font>
</pre>
