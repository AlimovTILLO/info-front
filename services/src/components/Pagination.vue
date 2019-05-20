<template>
  <div class="pagination">
      <div class="container">
        <div class="pagination__wrap">
          <a class="pagination__link--prev pagination__link" @click.prevent="changePage(pagination.current_page - 1)" :disabled="pagination.current_page <= 1"><i class="fal fa-angle-left"></i></a>
          <a v-for="page in pages" :key="page.id" class="pagination__link" :class="isCurrentPage(page) ? 'pagination__link--current' : ''" @click.prevent="changePage(page)">{{ page }}</a>
          <a class="pagination__link--next pagination__link" @click.prevent="changePage(pagination.current_page + 1)" :disabled="pagination.current_page >= pagination.last_page"><i class="fal fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  <!-- <div class="pagination">
      <div class="container">
        <div class="pagination__wrap">
          <a class="pagination__link--prev pagination__link" v-show="pagination.prev_page_url" href="#">
            <i class="fal fa-angle-left"></i>
          </a>
          <a class="pagination__link" v-show="pagination.prev_page_url" @click.prevent="changePage(pagination.current_page - 1)">{{pagination.current_page - 1}}</a>
          <a class="pagination__link pagination__link--current" @click.prevent="changePage(pagination.current_page)">{{pagination.current_page}}</a>
          <a class="pagination__link" v-show="pagination.next_page_url" @click="changePage(pagination.current_page + 1)" >{{pagination.current_page + 1}}</a>
          <a class="pagination__link pagination__link--reduction" v-if="pagination.last_page > 3"></a>
          <a class="pagination__link--next pagination__link" v-show="pagination.next_page_url"  @click.prevent="changePage(pagination.next_page_url)">
            <i class="fal fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div> -->
</template>

<script>
export default {
  props: ['pagination', 'offset'],
  methods: {
    isCurrentPage (page) {
      return this.pagination.current_page === page
    },
    changePage (page) {
      if (page > this.pagination.last_page) {
        page = this.pagination.last_page
      }
      this.pagination.current_page = page
      this.$emit('paginate')
    }
  },
  computed: {
    pages () {
      let pages = []
      let from = this.pagination.current_page - Math.floor(this.offset / 2)
      if (from < 1) {
        from = 1
      }
      let to = from + this.offset - 1
      if (to > this.pagination.last_page) {
        to = this.pagination.last_page
      }
      while (from <= to) {
        pages.push(from)
        from++
      }
      return pages
    }
  }
}
</script>
