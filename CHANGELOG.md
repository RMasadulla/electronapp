# Changelog

All notable changes to this project will be documented in this file.

Tags:

-   implemented
-   fixed
-   refactored
-   roughed out
-   explored
-   note/idea
-   next
-   in progress

## Pre-alpha release

## #1 08-20-21

Building core game engine

-   implemented: Finished card resolving for operations
-   note: Getting close to finishing core logic for game engine
-   **next**: shuffle discard pile back into deck, cap operation at x rounds (10)

## #2 08-23-21

Building core game engine, working on operation round phases

-   implemented: Shuffle discard pile back into deck, when deck is empty
-   implemented: If deck doesn't have enough cards for a full new hand, shuffle and then draw again
-   implemented: after 10 rounds of operation, go back to base screen
-   **next**: get combat working in operations, implement phases for combat, base defense
-   idea: for triggering combat from operation, send events for each selected card, starting with the non-combat cards, apply those effects, then move to combat

## #3 08-24-21

Working on core game logic. Focusing on combat scene

-   refactored (wip): combat machine
-   implemented: send events for each individual operation card
-   implemented: start combat when playing combat card
-   **next**: finish combat phases, start on base defense
-   idea: is it really worth having a separate machine for combat? Just nest combat machine in game machine for now
-   in progress: moving combat machine into game machine

## #4 08-25-21

Working on core game logic, focusing on combat and base defense

-   implemented: finished combat phases/rounds, cycles through them
-   implemented: damage can be dealt to enemies and player

## #5 08-30-21

Working on base defense. Finished rough first pass of core logic.

-   implemented: base defense screens, all phases, exits back to base screen at 10 rounds
-   implemented: reset rounds
-   implemented: rewards phase/screen firing and transitions

## #6 08-31-21

Working on UI and art assets now.

-   implemented: created operation screen background

## #7 09-01-21

Working on assets.

-   implemented: first pass of game logo

## #8 09-02-21

-   in progress: basic layout for operation screen, adding assets to background and cards

## #9 09-04-21

Working on finalizing Operation screen UI. Using CTR monitor graphics as inspiration.

## #10 09-06-21

Continuing work on Operation screen for steam page/teaser video.

Feeling overwhelmed by all that I need to do for the steam page/trailer. So many assets and pages to make.

Worried that the assets and screens won't be high quality enough.

Should I wait until I've really got stuff down or should I rush to bring out the trailer?

![operation screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/operation_screen_progress.png)

## #11 09-10-2021

Working/vacationing in Sayulita.

Finished first pass of the operation screen!

Going to wait to make steam page once I feel confident with what I have.

![operation screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/operation_screen_progress_02.png)

## #12 09-13-2021

Continue working on op screen.

![operation screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/op_screen_progress_03.png)

Started fleshing out combat screen.

![combat screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/combat_screen_progress.png)

Made even more progress on v1 of the Op screen:

![operation screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/op_screen_progress_04.png)

## #13 09-14-2021

Anniversary! Still working/vacationing in Sayulita.

-   implemented: placeholder art for cards
-   implemented: Sound effects component

## #14 09-15-2021

Implemeted sound effects for Operation. Still more to add, but you get them while playing cards.

Big next step is animating cards when shuffling, drawing, etc.

-   implemented: Sound effects when playing cards during operation.
-   in progress: card animations (shuffle, deal, etc.)

Notes for card animations:

-   in machine state, keep track of hand state (dealing, fanned, etc.)
-   use hand component for orchestrating the individual card aniamtions, staggered children
-   change in hand state triggers new animation control in useEffect \[handState\]

## #15 09-15-21

Big progress on hand, card animations:

-   implemented: hand component, handles card aniamtions. Got a sample deal/discard all animations.
-   **next**: trigger animations when phases happen. Orchestrate that somehow.

## #16 09-16-21

Heading back home to Seattle. Still working on Operation screen UI design.

Going for a more cyber-punk retro anime look. No background image, simpler dot grid and lofi elements:

![operation screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/op_screen_progress_05.png)

Maybe bring back illustrated backgrounds, but underneath dot grid, faded, much more subtle comic book style illustrations?

## #17 09-20-21

Working on combat screen design.

![combat screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/combat_screen_progress_02.png)

Working on reworking game context interface to include player and enemy deck, hands, etc. for combat phases.

Will need to duplicate phases for enemy as well.

Currently focused on getting all screens roughed out and playable at a very basic level. October will be about refining and getting art assets done.

## #18 09-21-21

Working on getting combat phases fully working, enemy selecting cards, etc.

Need to add additional UI for combat screen, like Deck/discard piles, round counter, etc.

![combat screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/combat_screen_progress_03.png)

## #19 09-22-21

Working on base defense screen, copied pasted over operation screen, modifying for base defense:

![base defense screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/base_defense_screen_progress.png)

Refactor to use card slots, selecting cards one at a time.

![operation screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/op_screen_progress_06.png)

## #20 09-23-21

Continue work on card slots, rough pass done for operations. Next up is combat, base defense.

Beyond that, need to work on roughing out all the other screens. Sketched out designs for operation screen.

![operation screen in progress pic](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/op_screen_progress_07.png)

## #21 09-27-21

Finished card slot logic (mostly). Gave card slots to enemy in combat. Started on giving cards different effects based on their slot.

Worked on roughing out:

-   Start screen
-   Base screen
-   Character screen

## #22 09-28-21

Working on layout, screen dimensions/aspect ratios. Using viewport units to make things more flexible.

IDEA: for combat, instead of playing against an enemy with their own set of cards, your negative cards are "used" by the enemy.

This way there can be multiple enemies. Simplifies the game and makes it more unique.

Enemies would still get a damage phase, and have their own offensive/defensive stats.

-   implemented: removed enemy card slots, enemy no longer selects their cards and resolves them. Instead enemy cards will just be the negative effect cards that a player plays.

## #23 09-29-21

Drafting cards. Focusing on operations.

-   implemented: drag and drop for hand of cards.
-   todo (done): On base screen, create section for Mission overview at top of page. (how many checkpoints left, etc.) Tiered sections, overview 12 cols, operation, base defense 6 cols, decks 4 cols.
-   todo (done): tactical advantage determines if you get to resolve your cards first. Rework (combine) resolve phase to include both player and enemy. Whichever entity has higher tac advantage gets to resolve first.
-   todo (done): sticky boxes: they appear on hover, dissappear when selecting, dragging a card. Box gives info on card, flavor text, etc.
-   idea (done): instead of selecting cards one by one for slots, instead allow player to drag drop into the slots. They start out in slots and then player can rearrange.
-   idea (done): add flavor text to cards, appears in a sticky box next to card effect/status explanations, etc.

## #24 10-1-21

-   implemented: now player selects cards for each slot by dragging and dropping into static slots.
-   implemented: add placeholder card boxes that player drags cards onto/off of

## #25 10-2-21

Right now just working on getting the game logic all squared away so I can dive into art/assets/UI.

-   implemented: more tiles for base screen, includes Mission Overview tile
-   implemented: entity with highest tactical advantage goes first during resolve phase

## #26 10-4-21

Continue work on UI fundamentals. More card ideas roughed out.

-   implemented: add info text sticky boxes
-   implemented: a bunch of Operation cards (no art yet)
-   refactored: cards, nested description within each effect object.

## #27 10-5-21

Continued working on Operation cards. Started an airtable with all of the cards.

-   implemented: more Operation cards
-   implemented: handle percentage buffs, handle buffing, nerfing all stats at once

## #28 10-6-21

Lots of refactoring how cards and the appying card effects works.

-   implemented: can now apply multiple effects to multiple stats

## #29 10-7-21

First alpha card art completed!

-   implemented: alpha card art for rapid deployement

![alpha art for rapid deployment card](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/rapid_deployment_card_art_alpha.png)

Not super happy about how it came out, for a few reasons:

-   My art skills are still rusty. What will happen is the first 20 things I draw/paint will look bad. After that, over time, my art skills will improve.
-   The art style isn't a good match for the feel I'm going for.
-   The subject needs to be up close and personal. IN YOUR FACE. ALWAYS.
-   Darker, grittier. This art is too light.

-   implemented: started adding combat cards
-   implemented: drafted the first 5 combat cards that I'll be using for marketing

## #30 10-11-21

Did a version 2 of the rapid deployment art. Wanted to hone in on a very different, more graphic style.

This v2 is way better. Much more like what I had imagined. I'm really liking this look. It's not perfect, but maybe even better than what I had pictured in my head. It just works well with the UI, the feel of the game.

![alpha art for rapid deployment card, version 2](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/rapid_deployment_card_art_alpha_02.png)

## #31 10-12-21

-   goal: do card art for combat care & scavenger
-   stretch goal: deadly arsenal art, worn out gear art
-   implemented: combat care art

![alpha art for combat care](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/combat_care_alpha_art.png)

## #32 10-13-21

It's taking some extra time to get back into the swing of drawing. Slowly getting better with each drawing I do.

-   goal: scavenger card art
-   stretch goal: deadly arsenal & combat encounter art (save worn out gear for later)
-   implemented: fetch modal (in progress):

![fetch modal in progress](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/fetch_modal_screenshot.png)

## #33 10-14-21

Working on card art for first 5 operation cards.

-   goal: finish scavenger card art, start deadly arsenal card art
-   stretch goal: start combat encounter card art. Work on fetch mechanic
-   implemented: alpha card art for scavenger operation card

    ![alpha art for scavenger](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/scavenger_alpha_art.png)

## #34 10-17-21

Working on card art for first 5 operation cards.

-   implemented: deadly arsenal alpha card art

    ![alpha art for deadly arsenal](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/deadly_arsenal_alpha_art_screenshot.png)

## #34 10-19-21

Finished first 5 operation card alpha arts.

-   implemented: combat encounter alpha card art

    ![alpha art for combat encounter](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/combat_encounter_alpha_art.png)

Now that the first 5 op cards are done, need to:

-   5 combat cards, 5 base defense cards
-   Get UI in good shape
-   Make game playable

## #34 10-20-21

Working on Operation UI

![operation screen progress](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/op_screen_progress_08.png)

## #35 10-21-21

Working on Operation UI

Got fetch mechanic fully working! Deleted a bunch of code in the `Hand` component that copied the hand state to local `orderedCards` managed state within the component. This meant the hand state was mamanged in two places (machine context and hand component). This was causing bugs and required additional code to keep global state and the local copy synced.

New set (scene) hand event method for updating hand and slots at the same time.

Started creating utils for event logic to avoid code duplication (started with updateSlots helper)

Deleted some extra code that was unused from event definitions.

-   implemented: fetch mechanic. Add button to bottom of card, triggers ability, opens modal with deck, replaces card with the one chosen
-   implemented: resolve alt combat cards (any combat cards that come after the first positioned combat card) along with other non-combat cards
-   implemented: play sound effects when resolving non combat operation cards

## #36 10-22-21

Working on getting game in good enough shape for releasing an alpha build by the END OF NEXT WEEK. Make it happen captain!

Working on adding sound effects to cards. Idea: add special "exciting" sound effects to highly effective and negative effects but have standard, "boring" effects for middling slots.

-   implemented: highlight cards as they resolve
-   implemented: add sound effects to operation cards

## #37 10-23-21

Decided for the alpha, I won't be releasing base defense. That will come later. Right now, focusing on operations and combat.

-   implemented: componentize operation screen UI components
-   implemented: reused shared screen components on combat screen
-   implemented: made fetch modal more generic. Reused on combat screen
-   implemented: add start of combat info box to combat screen

## #38 10-24-21

-   implemented: add enemy info card to top part of combat screen
-   implemented: put player HP above stats block, in bordered box

## #39 10-25-21

-   implemented: add generic placeholder for operation cards
-   implemented: add generic placeholder for combat cards
-   implemented: add choose attack mode modal
-   implemented: add buffed/nerfed stats
-   implemented: "Confirm selections" doesn't really make sense anymore, chose different wording "confirm card positions"

## #40 10-26-21

-   implemented: add active statuses (below stats block)
-   implemented: fade stats block in and out on hover so it's no so obtrusive
-   implemented: add 'retreat from combat' / 'abort operation' mechanics
-   bugfix: fix bug with z-index on sound effects. To fix card hover, I adjusted z-index when sound effect isn't shown, caused unexpected behavior
-   implemented: added a bunch of sound effects to different combat/operation/base defense events
-   implemented: disable the 'confirm card positions' button when it's not the positioning phase
-   implemented: sound effects for combat cards

## #41 10-27-21

-   implemented: add alpha intro
-   implemented: clear gained supplies/money and buffed/nerfed stats when operation ends
-   implemented: increment checkpoint count when finishing op
-   bugfix: fix combat no effect card getting skipped
-   implemented: status effects are factored into stat calculations and applied during combat
-   implemented: attacks now include base attack plus attack modifier based on attack mode, plus any applicable statuses
-   implemented: tooltips now display when hovering over stats and statuses, giving brief explanations of each
-   bugfix: don't allow a card to give an entity more HP than their max HP
-   bugfix: fix issue where subtracting a value from a stat didn't work when playing negative cards
-   implemented: restrict card effects from reducing a stat to a value below 0 (no negative stat values)
-   implemented: at the end of combat rounds, wipe out stat buffs/nerfs

## #42 10-29-21

-   implemented: additional polish for base screen / op tile
-   implemented: data access/storage layer
-   implemented: rework entire data storage layer to work in renderer process instead of the main process
-   implemented: start of menu modal, add button that triggers game data reset
-   bugfix: fetch modal on combat scene uses combat deck instead of op deck
-   bugfix: fix fetch card, was leaving behind only the fetched card in deck, instead of filtering it out
-   implemented: calculate enemy stats, display buffs/nerfs
-   implemented: add more combat cards
-   implemented: randomly select an enemy to fight when transitioning to combat

## #42 10-30-21

ALPHA RELEASE DAY!!!!

-   implemented: add statuses to enemy card
-   bugfixes: lots of them, lots of balancing, adjusting calculations.
-   implemented: reduce a lot of statuses to affect by 25% instead of 50%
-   sent out alpha to the first testers. Mac works great (for me), may experience hiccups for windows users

## #43 10-31-21

Got first bit of alpha feedback. It was mostly positive! First tester confirmed that the novel card positioning mechanic is engaging and creates strategic gameplay. Continued feedback will further confirm or challenge this hypothesis.

-   feedback addressed: set width and height of the window dynamically, using `primaryDisplay.workAreaSize` width/height.

## #44 11-1-21

Starting to work on Steam page - working on getting game screenshot and gameplay trailer ready.

-   feedback addressed: working on getting game layout more flexible for different screen sizes. worked on getting game optimized for Miller's smaller macbook screen size.
-   bugfix: multiple combat card message wasn't appearing
-   implemented: wallbang alpha card art

    ![alpha art for wallbang](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/wallbang_alpha_art.png)

## #44 11-2-21

Not feeling super satisfied with how combat card art is turning out so far. Just feels a bit off, like the compositions are a bit stiff, dull, not really sure what it is. I think they need to be way more gritty, more textured (maybe just add some background textures?). Needs to feel like being in the middle of a warzone, debris and shrapnel flying, heat in the air, that kind of thing.

-   implemented: flashbang alpha card art

    ![alpha art for flashbang](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/flashbang_alpha_art.png)

-   implemented: smoke grenade alpha card art

    ![alpha art for smoke grenade](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/smoke_grenade_alpha_art.png)

## #44 11-3-21

-   implemented: trusty sidearm card art

    ![alpha art for flashbang](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/flashbang_alpha_art.png)

## #44 11-4-21

-   implemented: Snap Out Of It / Waking Nightmare card art

    ![alpha art for snap out of it card](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/snap_out_of_it_alpha_art.png)

-   implemented: [steam] finish first 5 combat card arts

## #45 11-5-21

-   implemented: Cargo drop alpha card art

    ![alpha art for cargo drop card](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/cargo_drop_alpha_art.png)

-   implemented: Incendiary alpha card art

    ![alpha art for incendiary card](https://github.com/timothymalcham/electron-desktop-react/blob/main/src/images/incendiary_barrage_alpha_art.png)

## #46 11-11-21

Finished base defense card art for steam page. They need some refinements, but moving onto other stuff for now.

-   implemented: `Much Needed Repairs` card art and card
-   implemented: `Firefighters` card art and card
-   implemented: `Ground Troops` card art and card
-   implemented: working on enhancing the UI for screenshots/trailers
-   implemented: expanding game context/state. Added different levels of slots.

## #46 11-12-21

-   implemented: add radar decoration to UI
-   implemented: partially hide player stats section until player hovers over it

## #47 11-13-21

-   implemented: Refine fetch modal
-   implemented: make the sound effects look better (gradients, colored type, etc.)

## #48 11-14-21

-   implemented: finish making the fetch modal look pretty
-   implemented: add more UI elements (top left corner), add dino skull to behind menu button in top left corner

## #49 11-15-21

-   implemented: add UI element variations (combat, ops, base defense), so image assets can be easily swapped
-   implemented: add attackers to base defense scene

## #50 11-16-21

Refining UI for trailer/screenshots.

-   implemented: use different colors for different card slots
-   implemented: lots of little improvements to the UI

## #51 11-17-21

Last assets for trailer

-   implemented: allosaurus line art + flats

## #52 11-17-21

-   implemented: new Allosuarus avatar
-   implemented: started mouse pointer

-   todo: dinosaur hand mouse pointer
-   todo: T-rex illustration

## #53 11-24-21

Forgot to do some devlogs!

Submitted my "coming soon" page for review yesterday! Just need to wait 2-3 business days for them to (hopefully) approve it. Might happen next week since Thanksgiving is tomorrow.

-   implemented: t-rex illustration
-   in progress: refactoring card resolve phases, one card at a time

## #54 11-26-21

Steam page approved! Activated and coming soon page is live!

-   implemented: refactor card resolve/attacks
-   implemented: individual resolve phases for each card

## #55 11-27-21

-   implemented: individual combat phases for each entity

## #56 11-28-21

-   implemented: guards to catch if entity has died
-   implemented: starting writing tests

## #57 11-29-21

-   implemented: add operation intro screen
-   implemented: add operation names and affirmations

## #58 11-30-21

Adding lots of "transition" screens. Intro screens, etc.

-   implemented: finish first version of operation intro screen
-   implemented: operation loading screen
-   implemented: combat intro screen
-   in progress: reward screens

## #59 12-1-21

Working on adding cards.

-   implemented: start extracting out operation cards into starter deck, tier one, etc.
-   implemented: add base defense attack phase
-   implemented: base defense card effect that places attackers on the "field"

## #60 12-2-21

Need to add more cards for 0.2.0 alpha release

-   refactored: nicely organize cards into separate files and different decks/tiers.
-   in progress: card rewards

## #61 12-3-21

Pushing back alpha release to get more features in, specifically offensive/defensive synergies

-   implemented: combat card rewards!
-   implemented: operation card rewards!
-   implemented: base defense card rewards!
-   implemented: combat loading screen
-   bugfix: enemy/player health doesn't go below zero now
-   implemented: play out every combat encounter, not just the first one

## #62 12-4-21

-   implemented: resize on UI when scaling down

## #63 12-6-21

Alpha release 0.2.0 to be released tomorrow! (tuesday)

-   implemented: get game over screen working
-   implemented: ensure that game over screen actually appears when the player dies, instead of allowing player to keep playing through phases when hp is 0
-   implemented: add save game functionality instead of syncing data on intervals
-   implemented: add "game saved" message where the save game event is fired off
-   implemented: addressed negative feedback on waking nightmare card. Effect was too powerful, reduced to activating only 3 statuses

## #64 12-7-21

Alpha 0.2.0 releases today! Or, it should. Because tomorrow is the Halo Infinite release.

-   implemented: add repair phase to base defense
-   implemented: get base defense scene more balanced and playable, it's actually k
-   Alpha 0.2.0 released to testers!

## ALPHA RELEASE 0.2.0

Release date: Dec 7th

Includes:

-   base defense scene
-   intermediate screens (loading, intros, etc.)
-   more cards
-   deck building features

## Alpha patch 0.2.1

Date: 12-8-21

-   bugfix: enemies had statuses and wrong hp when being init'ed on combat start
-   bugfix: forgot to revert operation rounds back to 10
-   implemented: version number on top right of screen

## #65 12-9-21

Alpha release is out. Now just workng on getting more features implemented. A few big ones I want to complete in the coming weeks:

Refactoring to guide player through operations/base defense i.e. trigger base defense instances every 2 operations (may need to adjust this)

-   implement: cycle between operations and base defense (can only do base defense scene when base is under attack)

## #66 12-11-21

-   implemented: remove attack stats
-   implemented: remove statuses that rely on removed stats

## #67 12-12-21

Continuing work on refining core gameplay mechanics.

Working on removing attack/damage phase in favor of it all being card based.

## #68 12-17-21

Working on overhauling combat system

-   implemented: refined first enemy
-   implemented: added first enemy combat card

## #69 12-18-21

-   implemented: add logic for combat cards that have effects applied to both enemy and player targets

## #70 12-19-21

-   implemented: add starting enemies

## #71 12-21-21

Reworking stats and statuses. No more separate defense stats, instead I turned them into statuses (i.e. inCover, etc.).

-   implemented: delete old stats, add new statuses

## #72 12-22-21

-   in progress: refactoring statuses since they now affect attack/defense differently
-   implemented: a ton of refactoring for stats, statuses, etc.

## #73 12-26-21

Took a longish break for Christmas.

## #74 12-27-21

-   working on: adding multiple levels of negative effects (weak, average, etc.)
-   implemented: add multiple negative effect levels to each existing card, update codebase to handle multiple levels of negative effects
-   implemented: added shield property

## #75 12-31-21

Got COVID earlier this week (on monday, it's friday now). Kinda blanked on updating the changelog.

-   refactoring: statuses (x number of turns now instead of on/off, like slay the spire)
-   refactoring: stats, how damage is impacted

## #76 1-2-22

Onboarded Isaac to the project! He'll be helping with dev work.

-   implemented: force players to play fetch cards before proceeding to resolve phase
-   in progress: working on overhauling the UI

## #77 1-3-22

-   implemented: overhauled the UI, much cleaner and simpler

## #78 1-4-22

-   implemented: improved card effects, modularized different effects, refactored all cards
-   refactoring: reduce drawHand calls into one function

## #79 1-12-22

Been doing lots of character/enemy art.

-   implemented: add event system for operation and base defense event cards.
-   refactored: consolidated all types into one file
-   in progress: revamping starting deck, adding new cards (charge shields, standard issue rifle, etc.)

idea for base attackers:

-   Remove the idea of the "field". Instead, attackers get injected into the deck randomly when base is attacked.
-   Do ground vs flying matter?
-   The intensity of attacks ramp up the more operations that have been completed.
-   Add cards that prevent damage each round, cards that increase/decrease damage

## #80 1-15-22

Alpha release 0.3.0 is out!

What's included:

-   overhauling stats and statuses. You'll notice most stats are gone. I'm hoping this makes the game more clear and easier to follow
-   changes to UI. As above, hoping to make the game less opaque and easier to understand what is going on
-   starting to add events: there will be event cards triggering special events that give rewards or losses. There aren't many right now, but I'll be adding more this upcoming week
-   new enemies!
-   new cards and a new mechanic: shields

## #81 1-17-22

Changing out how base attackers work. Instead of fielding attackers and having a damage phase during the base defense scene, base attacker cards are injected into the base defense deck each round. These cards deal damage to the player.

-   refactor: base defense attackers
-   bugfixes: lots of bug fixes

## #82 1-18-22

-   implemented: show what cards are being injected into combat/base defense decks as they are being injected
-   implemented: enemy variants: WEAK, AVERAGE, DEADLY

## #83 1-19-22

-   implemented: tweak Charge Shields and SIR
-   refactored: adding more to the return type of calculated damage utility funcs
-   implemented: make anti-air, anti-ground actually work, along with rest of base stats and statuses
-   implemented: add tooltips to base status pills
-   implemented: decrement statuses each round (after round 1)

## #84 1-20-22

Changed up the starting combat deck a bit, to make it more balanced. Now it's:

-   4 charge shield (+2 cards, needed more defense)
-   4 SIR (same as before)
-   1 trusty sidearm (2 felt like two much for a starting deck that doesn't have much card variation)
-   1 snap out of it (to even the deck out to 10 starting cards)

-   implemented: nerf some of the average/weak enemies. They're too tough and can take out way too much HP even if you play well
-   implemented: add modal for choosing game mode when starting new game, add types for game modes (limited (demo), infinite, story)

Right now the entire game is demo/limited mode. After the demo is released, will start to develop out the other modes.

-   implemented: add messaging on operation screen showing how many upcoming combat encounters there are
-   implemented: add enemy defeated state transition

## #85 1-28-22

I've been bad at updating this. A lot going on the past week:

-   refactored: refactored how card effects work again. Did something simplier that doesn't require lots of loops all over the place.
-   implemented: Instead of injecting x cards per every 5 cards in combat deck, enemy cards are injected right into slots and removed at the end of the round. I hope this will make it more clear that enemy cards are separate from your deck and "belong" to the enemy, not you.
-   implemented: card animations. Cards fade in and up and fade out.
-   implemented: add tooltips that show what statuses affect damage right now
-   implemented: add card identity types (attack, defense, enemy, etc.) and show that on card, helps make clear what cards are enemy cards
-   refactored: swapped out old tooltips for the new ones everywhere (mostly cards)
-   implemented: added enemy variants
-   implemented: buffed enemy attack card damage, was too low, combat encounters were way too easy
-   implemented: overhauled statuses. Removed attack types CQC, H2H, and Ranged. Now only one kind of damage is dealt in combat encounters. Each defense stat prevents 25% of damage. If you get all 4 you can block all damage.
-   implemented: tutorial. A very simple one that appears at the beginning of a new game, similiar to Griftlands
-   implemented: add card costs

## #86 1-29-22

-   implemented: added card costs and turned rewards screen into a store where you buy as many out of 8 cards as you like/can afford
-   refactored: cleaned up typescript stuff: used consistent idiomatic naming, reduced some usage of null

## #87 1-31-22

-   bug fix: shields bug (can't buff them when breached) fixed for both player and enemy
-   implemented: merc killer encounters at end of operations (not all of them), they happen every 10 operations, this will likely need to be modified.
-   implemented: improve scaling for smaller screens
-   implemented: when combat encounter card is played in a positive slot, player gains supplies

## #88 2-1-22

-   implemented: refined how base defense stats/statuses/repairs work. Now anti-air/ground, fortifications act as a shield against damage, instead of a subtractor. Repairing base costs 25 supplies per round.
-   implemented: add more events
-   implemented: add more cards

## ALPHA RELEASE 0.5.0 NOTES:

Hey @everyone , I've finished alpha-release 0.5.0. This one is a pretty big release:

-   Now enemy attack cards are injected directly into negative slots each round of combat, instead of being injected into the deck itself.
-   I'm experimenting with some major changes to how some cards function in positive/negative slots. For example a player attack will do damage in positive slots, but none in negative slots (instead of dealing damage to yourself). This is also the case for enemy attacks, just vice versa.

A big thank you to @Ian and @Alex for giving feedback and ideas earlier regarding the two above changes.

-   Started adding card animations so cards don't flash/jump around. This still needs some polish, so expect some visual weirdness, particularly during combat encounters. I know what the issue is and will be patching that soon.
-   Improved tooltips across the board. Should look better and give more information. Base Defense might be missing some card tooltips, I'll add those soon as well.
-   Added card identity types so it's more clear what each card is and what its purpose is
-   Added enemy variants (combat encounter cards said a variant will be encountered, but that previously wasn't fully implemented). I'll be continuing to work on balancing and refining these variants. Likely I'll be nerfing weak enemies soon, so they actually feel "weak".
-   Buffed enemy attack damage since it was getting too easy to exit from combat without taking any damage at all. I'll be continuing to refine this, see above line item.
-   Completely overhauled statuses. I removed attack types from enemy/player combat cards. Now there are 4 defense statuses that each impart a 25% reduction against all combat damage. Collect all 4 and you block all damage. However there is risk involved with this, since there are negative statuses that function based off these positive defense stats (more cards incoming that actually impart and utilize these new statuses). Right now this probably sounds confusing, but I think in the long run it will make the game more clear and dynamic.
-   Started adding a very basic, simple tutorial that appears when you start a new game. You can skip it. I'll be adding images/gifs to that tutorial soon so that it's more useful.
-   Added card costs. Right now I just gave every card an arbitary cost of 200 dollars/supplies. I'll be refining these costs soon.
-   Card reward screens are now a place where you can buy 1-8 cards. Soon I'll be adding the ability to remove cards from your deck here.
-   Added Merc-Killer combat encounters every 10 operation rounds. These enemies are like the Elite/Boss enemies from Slay the Spire.
-   Continued work on improving scaling for smaller screens. If you run into any issues with these, lmk and I'll fix asap.
-   Refined Base Defense scene and how Base stats/statuses/repairs work.
-   Added a few more events to the game, will be adding more
-   Added new cards, refined some existing ones
    Alpha release 0.5.0 (mac + win): https://drive.google.com/file/d/13isE5MNUYTGQVaXSdrn6zg5vTm78ZV64/view?usp=sharing

What's coming up next? Steam's Next Fest is pretty much the only thing on my mind right now as far as this game goes. I'm racing to get the game in a "good enough" state so I can publish a demo to the steam page for the festival.

So at this point I'm doing a ❄️ Code Freeze ❄️, which means I won't be adding any new features (unless 100% necessary, but I'll probably hold off until after the Fest). I'll only be doing:

-   Adding new cards to the game
-   Addressing tester feedback
-   Fixing bugs and improving performance
-   Enhancing the game visually, adding card art, etc.

If you help test the game and provide feedback over the next couple weeks, thank you! It is needed right now and will help me ship a viable demo.

Since I won't be adding new features, any feedback regarding game balance and flow, cards that should exist that don't, cards that exist but shouldn't are the highest priority. Thank you again to anyone who helps out with testing and giving feedback. I literally can't do this without all of you.

## #89 2-2-22

-   implemented: Removed NIMBLE and HEIGHTENED SENSES as statuses. 4 defensive statuses was way too much.
-   implemented: buffed positive and negative statuses. Everything is 50% +/- rather than 25%.
-   implemented: VTOL asset for empty bottom lefthand corner of Operation screen

## #90 2-5-22

-   implemented: increase attack damage from enemy cards. Now when you put an enemy attack card in a positive slot, it blocks some of the damage, not all of it.
-   implemented: add frag grenade and laser blast to starter decks, to give the player some debuffing attacks
-   fixed: added logic for close air attack card, shields are now affected
-   implemented: removed `decrementStatuses` action on combat round init, now statuses no longer decrement at the beginning of rounds. You must use cards to decrement/remove these statuses from the enemy and vice versa.
-   fixed: scaling issues on reward/intro screens
-   implemented: removed one combat encounter from the starting deck to help speed things up

-   todo: remove "sound effect" from the middle of the screen and implement sound effect/card effect queues to each entity involved in a scene

## #91 2-6-22

-   implemented: add more generic store descriptions to cards

**ALPHA release 0.6.0 notes:**

Uploading Alpha release 0.6.0 right now. Changes:

-   Removed NIMBLE and HEIGHTENED SENSES defensive statuses. 4 Defensive statuses was probably too much.
-   Now ARMORED and IN COVER both impart a 50% decrease to incoming damage. This may likely evolve to something more dynamic, unless it works well in its current state.
-   Buffed positive and negative statuses across the board as well. 25% +/- was too little and didn't provide enough incentive to use dedicated status cards.
-   worked on balancing damage from enemy cards, hopefully this makes combat more challenging for more players (was too easy before, could easily avoid damage)
-   add two new attack cards to starting combat deck to offset ARMORED/IN COVER statuses
-   fixed close air support card, takes into account shields now
-   statuses no longer decrement at the beginning of rounds, which means the only way you can remove or lose statuses is through card effects
-   fixed some scaling issues in some parts of the game
-   removed one combat encounter from the starting Operation deck, hopefully this speeds up Operations a bit so they don't take around an hour. If they still feel too long, I'll reduce enemy health and/or up attack damage.
-   added generic store descriptions to help reduce confusion (i.e. I was defaulting to the Average card slot descriptions, which maybe didn't get the best overall description of what a card will do, positive, and negative)
-   UI related: added VTOl to Operations (why this is there will be more clear soon), enhanced base screen

Let me know how these new changes feel in terms of balance and fluidity. As mentioned before, I'm aiming to make the game feel fun, fluid, and challenging. These are abstract descriptors, so please let me know your subjective take on whether I'm hitting the target or not.
Upcoming changes:

-   getting rid of centered "sound effect" text that appears when a card resolved. Instead I'll be replacing this will queues next to each entity that will show card effects, etc.
-   more cards, art, and balancing.
-   An actual screen/message when you beat the mission (20 operations undertaken)
    Thank you again to everyone who playtests the game! The Steam Next Fest is in 15 days, so getting feedback to help improve the game is super critical right now and makes the biggest difference ❤️‍🔥

## #92 2-9-22

-   implemented: add barks to the game. Replaces "sound effects". Contextual dialogue/messages that are "said" by entities in the game (player, enemy, etc.)
-   card art: charge shields

Released alpha-0.7.0

Alpha release 0.7.0 notes:

I have Alpha release 0.7.0 ready for playtesting if anyone is interested. If you'd like to play this release, DM me or add an emoji reaction to this message and I'll send the build over to you. No long list of features with this release. Just UI enhancements and added 🐕 Barks 🐕 to the game. Previously when cards resolved, text would flash in the middle of the screen every two seconds. I got rid of this, and added contextual dialogue/messaging to each entity involved in the scene (player, enemy, etc.). This should help speed up the flow of each round and provide more helpful information to the player. Let me know if you like this change or not. Also feedback regarding balance is still greatly needed as the Next Fest approaches. Thanks everyone!

## #93 2-10-22

-   card art: close air support
-   card art: frag grenade
-   card art: laser strike

## #94 2-14-22

VERY BIG CHANGE. Decided to push back the release of the game to **August 2022**. The game will need more time to create all of the cards that need to be created, have art made for them, and playtest everything.

As a result, I'll be participating in Steam Next Fest in June, not this month. I want to have the game in a place where it could potentially be featured in a "top 10 steam next fest games" video on youtube/twitch. Right now, the game is "too alpha" for that.

-   implemented: started to add defense and special ability cards to each enemy, for more variety in what enemies do during combat encounters.

## #95 2-16-22

Doing card art, adding more cards to enemies

-   idea/todo: going to re-work defensive statuses. Make armored a stackable thing? Make cover a 75% reduction in damage?
-   implemented: armored now stacks and reduces damage by value, instead of 50%
-   implemented: in cover now reduces damage by 75% and is decremented each turn

-   idea/todo: overhaul game state, next game within player state
-   idea/todo: make seed system (start a new game based on a predefined game state obj), use this to test out specific cards/enemies

## #96 2-16-22

-   refactored: massive refactor, overhauled game state, now game state is nested under DinoMercsContext. Allows for saving non-run specific data that won't be wiped out when starting a new run.

## #97 2-17-22

-   refactored: working on slimming down components, less props, etc.

## #98 2-21-22

-   implemented: add seed system for testing, and for players in the future. Allows for starting a new game with a predefined context object for the game state.

## #99 2-24-22

-   implemented: add timeline feature, for tracking checkpoints, etc.
-   refactored: use selectors for everything

## #100 2-27-22

-   implemented: added suspense images, hoisting components to parents, passing as children

## #101 2-28-22

-   todo: base art
-   todo: add in merc killer art

-   implemented: base art, added as asset to the game
-   implemented: refining tons of things, base defense mostly

## #102 3-1-22

-   todo: refine base defense scene

-   implemented: added mission complete screen
-   implemented: added character selection screen and functionality
-   implemented: anchor screen elements to top/middle/bottom to better support scaling upwards on larger viewports

## #102 3-21-22

-   refactor: updated how statuses work, include durations

## #102 3-24-22

-   implemented: added ALL IN card, added in invisible statuses

## #102 3-25-22

-   implemented: add SPOILS OF WAR, GUIDED MISSILE.
-   fixed: deadly negative effects on attack cards are now attacks blocked completely by enemies. It doesn't make sense for deadly negative effect to deal more damage than the weak negative effect, it should result in less damage being dealt as the effects get "worse".
-   implemented: add FIRE FLAIL card

---

#### Timeline:

**Feb**

-   [x] add base defense art
-   [x] add art for first merc-killer
-   [x] add seed functionality
-   [x] add timeline feature

**Mar**

-   [ ] mouse pointers
-   [x] inject combat encounter cards
-   [x] add basic character selection screen
-   [x] add mission complete screen
-   [ ] add more cards (all status related cards for basic/defensive statuses)
-   [ ] release alpha on Steam

**Apr**

-   [ ] start adding legend cards
-   [ ] add T-rex character
-   [ ] Add more merc killers
-   [ ] add 1-2 more enemies
-   [ ] more cards, more cards, more cards
-   [ ] animate allosaurus, carnotaurus, and styracosaurus characters

**May**

-   [ ] start working on story mode
-   [ ] add triceratops character
-   [ ] more cards

**June**

-   [ ] finish story mode
-   [ ] add utahraptor character
-   [ ] more cards

**July**

-   [ ] full steam integration
-   [ ] achievements, high scores
-   [ ] more cards

**August**

-   [ ] whatever needs to be finished
-   [ ] release game on Steam
