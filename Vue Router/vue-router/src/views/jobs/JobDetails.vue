<template>
    <h1>Job Details Page</h1>
    <p>
        this job is {{ id }}
    </p>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {

        }
    }
}
</script>

<style>

</style>