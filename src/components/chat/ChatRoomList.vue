<template>
  <div>
    <div v-if="getErrorState">
      <h3 style="text-align: center; margin-bottom: 30px;">
        서버와의 연결이 불안정합니다.
      </h3>
      <img
          src="/error.jpg"
          alt="img"
          style="width: 100%;"
      >
    </div>

    <div v-else>
      <div
          v-for="room in getChatRooms"
          :key="room.ROOM_ID"
          class="msg-box"
          @click="toRoom(room)"
      >
        <div class="img-info-box">
          <div class="img-box">
            <div
                v-if="room.IM_ON"
                class="im-on"
            />
            <img
                :src="room.AVATAR_PATH"
                alt="img"
                class="img"
            />
          </div>
          <div class="info-box">
            <p class="site-name">{{ room.SITE_NAME }}</p>
            <p class="last-msg">{{ shortenMsg(room.MESSAGE) }}</p>
          </div>
        </div>
        <div class="time-box">
          <div class="last-msg-time">{{ room.CREATED_AT }}</div>
          <div
              v-if="room.UNREAD !== 0"
              class="is-unread"
          >
            {{ room.UNREAD }}
          </div>
          <div
              v-else
              class="no-unread"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters('Chat', [
      'getChatRooms',
      'getSocket',
      'getUserId',
      'getAreYouInAppList',
      'getErrorState'
    ])
  },
  watch: {
    getSocket(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getChatRooms.forEach(room => {
          this.$enterRoom(`${room.ROOM_ID}-1`);
        });
        this.$reloadChatRooms(() => {
          this.chatRooms();
        });
        this.$deleteChatReloadRoomList(() => {
          this.chatRooms();
        });
        this.$imOnApp(payload => {
          this.setAreYouOn(payload);
        });
        this.changeErrorState(false);
      }
    }
  },
  async created() {
    this.$imOnApp(payload => {
      this.setAreYouOn(payload);
    });
    await this.chatRooms();
    await this.$socket.emit('areYouInApp', this.getAreYouInAppList);

    this.getChatRooms.forEach(room => {
      this.$enterRoom(`${room.ROOM_ID}-1`);
    });
    this.$reloadChatRooms(() => {
      this.chatRooms();
    });
    this.$deleteChatReloadRoomList(() => {
      this.chatRooms();
    });
  },
  unmounted() {
    this.getChatRooms.forEach(room => {
      this.$leaveRoom(`${room.ROOM_ID}-1`);
    });
    this.$socket.off('yesDeleteForRoomList');
    this.$socket.off('reloadChatRooms');
    this.$socket.off('imOnApp');
  },
  methods: {
    ...mapActions('Chat', ['chatRooms']),
    ...mapMutations('Chat', [
      'setAreYouOn',
      'setOpponentAvatar',
      'setOpponentSiteName',
      'changeErrorState'
    ]),
    toRoom(room) {
      this.$router.push(`./${room.ROOM_ID}`);
    },
    shortenMsg(msg) {
      if (!msg) return '';
      return msg.length > 12 ? `${msg.slice(0, 12)}...` : msg;
    }
  }
};
</script>

<style lang="scss" scoped>
.msg-box {
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 32px;
  height: 54px;
  justify-content: space-between;

  .img-info-box {
    display: flex;

    .img-box {
      position: relative; // 'im-on' 클래스를 올바르게 위치시키기 위해 추가

      .img {
        width: 54px;
        height: 54px;
        border-radius: 16px;
      }

      .im-on {
        position: absolute;
        width: 8px;
        height: 8px;
        top: 0;
        right: 0;
        background-color: #00B286;
        border: 1.5px solid #F8F8FA;
        border-radius: 100%;
      }
    }

    .info-box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50vw;

      .site-name {
        font-size: 16px;
        font-weight: 700;
      }

      .last-msg {
        font-size: 14px;
        color: #737373;
      }
    }
  }

  .time-box {
    width: 16vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .last-msg-time {
      text-align: end;
      font-size: 12px;
      color: #737373;
    }

    .is-unread {
      width: 24px;
      height: 24px;
      background-color: #FF0000;
      color: white;
      margin-left: auto;
      line-height: 24px;
      border-radius: 8px;
      text-align: center;
      font-size: 12px;
    }

    .no-unread {
      width: 24px;
      height: 24px;
    }
  }

  p {
    margin: 0;
  }
}
</style>
