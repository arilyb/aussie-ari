<?php

use Drupal\views\Plugin\views\sort\SortPluginBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Basic sort handler for Events.
 *
 * @ViewsSort("custom-sort-plugin")
 */
class CustomsortPlugin extends SortPluginBase {

    protected function defineOptions() {
        $options = parent::defineOptions();

        $options['hide_sort_by'] = ['default' => 'False'];
        return $options;
      }


    /**
     * Basic options for all sort criteria.
     */
    public function buildOptionsForm(&$form, FormStateInterface $form_state) {
        parent::buildOptionsForm($form, $form_state);
        if ($this->canExpose()) {
            $this->showExposeButton($form, $form_state);
        }
        $form['op_val_start'] = ['#value' => '<div class="clearfix">'];
        $this->showSortForm($form, $form_state);
        $this->hideSortByDropdown($form, $form_state);
        $form['op_val_end'] = ['#value' => '</div>'];
        if ($this->canExpose()) {
            $this->showExposeForm($form, $form_state);
        }
    }

    /**
     * Shortcut to display the value form.
     */
    protected function hideSortByDropdown(&$form, FormStateInterface $form_state) {
        $form['hide_sort_by'] = [
            '#title' => $this->t('Hide sort by', [], ['context' => 'hide sort by in form']),
            '#type' => 'radios',
            '#options' => [
            'True' => 'True',
            'False' => 'False'
            ],
            '#default_value' => $this->options['hide_sort_by'],
            '#description' => 'Hide the sort by button, if there is only one sort by option in the dropdown.'
        ];
    }


}