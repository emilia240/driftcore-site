<template>
  <Teleport to="body">
    <Transition name="overlay-fade">
      <div
        v-if="state !== 'idle'"
        class="fixed inset-0 z-[200] overflow-hidden bg-whiteBase"
      >
        <!-- Ambient orbs, one per corner -->
        <div class="orb orb-tl" />
        <div class="orb orb-tr" />
        <div class="orb orb-bl" />
        <div class="orb orb-br" />

        <!-- Content: loading → coming soon -->
        <div class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <Transition name="content-swap" mode="out-in">

            <!-- Loading state -->
            <div v-if="state === 'loading'" key="loading" class="flex flex-col items-center gap-8">
              <img src="/logo-driftcore.svg" alt="DriftCore" class="logo-pulse h-28 w-auto sm:h-36" />
              <div class="flex gap-2.5" aria-label="Loading" role="status">
                <span class="dot dot-1" />
                <span class="dot dot-2" />
                <span class="dot dot-3" />
              </div>
            </div>

            <!-- Coming soon state -->
            <div v-else key="done" class="flex flex-col items-center gap-6">
              <img src="/logo-driftcore.svg" alt="DriftCore" class="h-20 w-auto opacity-80 sm:h-24" />
              <div class="flex flex-col gap-3">
                <h2 class="font-heading text-h2 text-navy">Coming soon</h2>
                <p class="mx-auto max-w-sm font-body text-body text-slateBlue">
                  The app is on its way. We'll let you know as soon as it's ready.
                </p>
              </div>
              <router-link
                to="/"
                class="font-body text-sm font-medium text-navy underline underline-offset-4
                       transition-colors hover:text-slateBlue"
              >
                ← Back to home
              </router-link>
            </div>

          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  state: { type: String, required: true }, // 'idle' | 'loading' | 'done'
})
</script>

<style scoped>
/* ── Overlay fade in/out ── */
.overlay-fade-enter-active,
.overlay-fade-leave-active { transition: opacity 0.35s ease; }
.overlay-fade-enter-from,
.overlay-fade-leave-to      { opacity: 0; }

/* ── Content swap (loading ↔ coming soon) ── */
.content-swap-enter-active { transition: opacity 0.45s ease, transform 0.45s ease; }
.content-swap-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.content-swap-enter-from   { opacity: 0; transform: translateY(20px); }
.content-swap-leave-to     { opacity: 0; transform: translateY(-20px); }

/* ── Ambient orbs ── */
.orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}
.orb-tl {
  top: -8rem; left: -8rem;
  width: 44rem; height: 44rem;
  background: rgba(219, 231, 255, 0.55); /* paleBlue */
  filter: blur(140px);
  animation: orb-drift 14s ease-in-out infinite;
}
.orb-tr {
  top: -8rem; right: -8rem;
  width: 40rem; height: 40rem;
  background: rgba(84, 201, 235, 0.20); /* brightBlue */
  filter: blur(150px);
  animation: orb-drift 17s ease-in-out infinite reverse;
}
.orb-bl {
  bottom: -8rem; left: -8rem;
  width: 38rem; height: 38rem;
  background: rgba(74, 93, 135, 0.16); /* slateBlue */
  filter: blur(130px);
  animation: orb-drift 20s ease-in-out infinite 2s;
}
.orb-br {
  bottom: -8rem; right: -8rem;
  width: 42rem; height: 42rem;
  background: rgba(127, 140, 191, 0.20); /* softBlue */
  filter: blur(160px);
  animation: orb-drift 16s ease-in-out infinite 1s reverse;
}

@keyframes orb-drift {
  0%, 100% { transform: translate(0, 0)       scale(1);    }
  33%       { transform: translate(28px, 40px)  scale(1.07); }
  66%       { transform: translate(-18px, 18px) scale(0.94); }
}

/* ── Logo breathing animation ── */
.logo-pulse { animation: logo-float 2.6s ease-in-out infinite; }
@keyframes logo-float {
  0%, 100% { transform: scale(1);     opacity: 0.85; }
  50%       { transform: scale(1.04); opacity: 1;    }
}

/* ── Loading dots ── */
.dot {
  display: block;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 9999px;
  background: rgba(33, 51, 69, 0.30);
}
.dot-1 { animation: dot-bounce 1.2s ease-in-out infinite 0s;    }
.dot-2 { animation: dot-bounce 1.2s ease-in-out infinite 0.18s; }
.dot-3 { animation: dot-bounce 1.2s ease-in-out infinite 0.36s; }

@keyframes dot-bounce {
  0%, 80%, 100% { transform: scale(0.65); opacity: 0.35; }
  40%           { transform: scale(1.2);  opacity: 1;    }
}

@media (prefers-reduced-motion: reduce) {
  .orb, .logo-pulse, .dot-1, .dot-2, .dot-3 { animation: none !important; }
}
</style>
