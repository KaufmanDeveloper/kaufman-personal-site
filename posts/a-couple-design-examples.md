---
title: 'A Couple of Front End Design Examples'
date: '2023-12-29'
---

I decided I wanted to show a couple examples of small designs I came up with and implemented. So here those are!

### Column Settings

![Column Settings](/images/column_settings.png 'Column Settings')

For a utilities Fieldwork application, we have a complex table that displays job information to users. On desktop, users can click and drag to reorder table columns as well as drag borders to modify column widths.

As the majority of our users are moving to mobile devices, interacting with the table in this way is no longer as easy with the touch interface. As a result, I built out a simple interface for reordering columns and editing pixel widths of those columns.

On a save action, those settings persist to the local settings database and they're taken back to the job table view. They can reset to a smart default for each table as well.

### Birthday Greetings

![Column Settings](/images/birthday_greetings_record.png 'Birthday Greetings Record')

I developed an application for recording voice memos to employees that would automatically get emailed to given employees on their birthday. I decided to go with a modal view that pops out from a list view to do recordings for each employee.

For the above local development image I'm using Mirage data with Faker and default images in the list view, so actual photos are not used.

I tried to use a simple interface that would give priority to the actions of recording and stopping a recording, and having the appropriate buttons be disabled when they're not functional in a given state. It's a simple but effective bit of UI that I think allows users to use recording functionality intuitively.
