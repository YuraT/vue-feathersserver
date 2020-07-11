<template>
  <div>
    <input
      type="text"
      placeholder="Enter message"
      v-model="newMessage"
      @keyup.enter="tryAddMessage"
    />
    <button type="submit" @click="tryAddMessage">Add message</button>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <span>{{ message.text }}</span>
        <span @click="tryRemoveMessage(message)">x</span>
      </li>
    </ul>
    <p>{{ testtext.text }}</p>
  </div>
</template>

<script>
import * as services from "../../services";

export default {
  name: "Messages",
  data() {
    return {
      messages: [],
      newMessage: "",
      testtext: {}
    };
  },
  methods: {
    fetchMessages() {
      console.log("doing stuffs");
      services.messageService.find({}).then(messages => {
        console.log(messages);
        this.messages = messages.data;
      }).catch(e => {
        console.log("fetchMessages error: ", e)
      });
      services.testtextService.find({}).then((data) => {
        console.log("testtext: ",data);
        this.testtext = data;
      }).catch(e => {
        console.log("testtexterror", e);
      })
    },
    tryAddMessage() {
      services.messageService.create({
        text: this.newMessage,
      }).then((message) => {
        this.messages.push(message);
        this.newMessage = '';
      });
    },
    tryRemoveMessage(message) {
      services.messageService.remove(message._id, {}).then(message => {
        this.messages = this.messages.filter((obj) => {
          return obj._id != message._id;
        })
      });
    }
  },

  created() {
    this.fetchMessages();
  }
};
</script>

<style>
</style>