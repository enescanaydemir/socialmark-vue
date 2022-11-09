import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123123!456?",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },

  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _saltKey: (state) => state.saltKey,
  },

  plugins : [
    createPersistedState({ //bu kısımda kullandığınız plugins, SecureLS kullanımıdır. Bu plugin sayesinde Application altındaki datamız şifrelenerek gelir.
      storage: {
        //aşağıdaki set get ve silme(remove) işlemlerini görüldüğü üzere ls üstünden yapıyor.
        getItem: (key) => ls.get(key), //key denilen şey gelen verinin keyidir. Yani chrome -> inspect -> Application -> Local Storage içerisinde bulunan Key kısmının altındaki vuex dir bu vuex sadece bir isimdir bunun adını "key: user" şeklinde değiştirebiliriz.
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
