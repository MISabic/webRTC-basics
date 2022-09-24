# webRTC-basics

Open two browsers and start developer console by pressing CTRL+SHIFT+J.
Let's say we have two browsers, Chrome and Edge, we will consider Chrome as peerA and Edge as peerB.

### Step #1:

Copy the first part of the code from peerA and execute it in the Chrome console. It will generate a sdp with type "offer".

### Step #2:

Now, copy the first part of the code from peerB and paste it in the Edge console. Replace the value of offer with the sdp generated in step 1. It will generate an answer.

### Step #3:

Copy the second part of the code from peerA file and paste it in the Chrome console. Replace the value of answer with the sdp generated in step 2. If everything is okay, both browsers will print "Connection opened!"

### Step #4:

Now you can chat between two browsers using `dataChannel.send("");`
