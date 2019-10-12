<template>
  <div id="header_top">
    <div id="header">
      <div id="menu-icon" :class="{'active':activeMenu}" @click="menuClick()">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </div>
      <div class="logo">
        <a @click="linkTo('list')">Dongucci-Dev</a>
      </div>
      <nav :class="{'active':activeMenu}">
        <form class="search" action="search.php">
          <input name="q" placeholder="Search..." type="search" />
        </form>
        <ul>
          <li>
            <a @click="linkTo('/')">Home</a>
          </li>
          <li>
            <a @click="linkTo('list')">List</a>
            <!-- <ul class="mega-dropdown">
              <li class="row">
                <ul class="mega-col">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <ul class="mega-col">
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
                <ul class="mega-col">
                  <li>
                    <a href="#">Coming Soon</a>
                  </li>
                  <li>
                    <a href="#">404 Error</a>
                  </li>
                  <li>
                    <a href="#">Search</a>
                  </li>
                  <li>
                    <a href="#">Author Page</a>
                  </li>
                </ul>
                <ul class="mega-col">
                  <li>
                    <a href="#">Full Width</a>
                  </li>
                  <li>
                    <a href="#">Right Column</a>
                  </li>
                  <li>
                    <a href="#">Left Column</a>
                  </li>
                  <li>
                    <a href="#">Maintenance</a>
                  </li>
                </ul>
              </li>
            </ul>-->
          </li>
          <li class="dropdown">
            <a href>Contact</a>
            <!-- <ul>
              <li>
                <a href="#">About Version</a>
              </li>
              <li>
                <a href="#">About Version</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>-->
          </li>
          <li>
            <a href>Portfolio</a>
          </li>
          <li>
            <a href>Team</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private activeMenu: boolean = false;

  private menuClick(): void {
    this.activeMenu = !this.activeMenu;
  }

  private linkTo(to: string): void {
    this.$router.push(to);
  }
}
</script>

<style scoped>

</style>